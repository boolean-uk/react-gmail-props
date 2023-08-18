import { useState } from "react";

import initialEmails from "./data/emails";

import "./styles/app.css";
import Emails from "./Emails";
import EmailView from "./EmailView";

const getReadEmails = (emails) => emails.filter((email) => !email.read);

const getStarredEmails = (emails) => emails.filter((email) => email.starred);
const images = [
    "https://www.pngitem.com/pimgs/m/521-5219112_cat-and-dog-footer-hd-png-download.png",
    "https://animal.movementforgood.com/img/hero.jpg",
    "https://as1.ftcdn.net/v2/jpg/04/24/50/08/1000_F_424500878_AlShr5vfCn5r7tMwyTvLgpDRZVTmgZCg.jpg",
    "https://www.wolfsurvivalgear.com/cdn/shop/files/footer_1200x1200.jpg?v=1634151476",
    "https://www.saltspringcat.com/wp-content/uploads/2022/10/footer.jpg",
];
const baseLorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, `;

function App() {
    const [emails, setEmails] = useState(
        initialEmails.map((email, index) => ({
            ...email,
            content: baseLorem.repeat(email.id * 2),
            img: images[index],
            emailAddress: `example${Math.random() * 11}@mail.com`,
        }))
    );
    const [hideRead, setHideRead] = useState(false);
    const [currentTab, setCurrentTab] = useState("inbox");
    const [selectedEmail, setSelectedEmail] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const unreadEmails = emails.filter((email) => !email.read);
    const starredEmails = emails.filter((email) => email.starred);

    const handleEmailClick = (email) => {
        setEmails(
            emails.map((e) => (e.id === email.id ? { ...e, read: true } : e))
        );
        setSelectedEmail(email);
    };

    const handleBack = () => {
        setSelectedEmail(null);
    };

    const toggleStar = (targetEmail) => {
        const updatedEmails = (emails) =>
            emails.map((email) =>
                email.id === targetEmail.id
                    ? { ...email, starred: !email.starred }
                    : email
            );
        setEmails(updatedEmails);
    };

    const toggleRead = (targetEmail) => {
        const updatedEmails = (emails) =>
            emails.map((email) =>
                email.id === targetEmail.id
                    ? { ...email, read: !email.read }
                    : email
            );
        setEmails(updatedEmails);
    };

    let filteredEmails = emails;

    if (hideRead) filteredEmails = getReadEmails(filteredEmails);

    if (currentTab === "starred")
        filteredEmails = getStarredEmails(filteredEmails);

    if (searchQuery) {
        filteredEmails = filteredEmails.filter((email) =>
            email.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    return (
        <div className="app">
            <header className="header">
                <div className="left-menu">
                    <svg
                        className="menu-icon"
                        focusable="false"
                        viewBox="0 0 24 24"
                    >
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                    </svg>

                    <img
                        src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
                        alt="gmail logo"
                    />
                </div>

                <div className="search">
                    <input
                        className="search-bar"
                        placeholder="Search mail"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </header>
            <nav className="left-menu">
                <ul className="inbox-list">
                    <li
                        className={`item ${
                            currentTab === "inbox" ? "active" : ""
                        }`}
                        onClick={() => {
                            setCurrentTab("inbox");
                            setSelectedEmail(null);
                        }}
                    >
                        <span className="label">Inbox</span>
                        <span className="count">{unreadEmails.length}</span>
                    </li>
                    <li
                        className={`item ${
                            currentTab === "starred" ? "active" : ""
                        }`}
                        onClick={() => {
                            setCurrentTab("starred");
                            setSelectedEmail(null);
                        }}
                    >
                        <span className="label">Starred</span>
                        <span className="count">{starredEmails.length}</span>
                    </li>

                    <li className="item toggle">
                        <label htmlFor="hide-read">Hide read</label>
                        <input
                            id="hide-read"
                            type="checkbox"
                            checked={hideRead}
                            onChange={(e) => setHideRead(e.target.checked)}
                        />
                    </li>
                </ul>
            </nav>
            {selectedEmail === null && (
                <Emails
                    filteredEmails={filteredEmails}
                    actions={{ toggleStar, toggleRead, handleEmailClick }}
                    searchQuery={searchQuery}
                />
            )}

            {selectedEmail !== null && (
                <EmailView
                    filteredEmails={filteredEmails}
                    selectedEmail={selectedEmail}
                    actions={{ handleBack, handleEmailClick }}
                    index={filteredEmails.findIndex(
                        (email) => email.id === selectedEmail.id
                    )}
                />
            )}
        </div>
    );
}

export default App;
