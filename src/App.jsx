import { useState } from "react";

import initialEmails from "./data/emails";

import "./styles/App.css";
import Emails from "./components/Email/Emails";
import MainNavigation from "./components/Layout/MainNavigation";
import SideMenu from "./components/Layout/SideMenu";

const getReadEmails = (emails) => emails.filter((email) => !email.read);

const getStarredEmails = (emails) => emails.filter((email) => email.starred);

function App() {
    const [emails, setEmails] = useState(initialEmails);
    const [hideRead, setHideRead] = useState(false);
    const [currentTab, setCurrentTab] = useState("inbox");
    const [emailDisplayIndex, setEmailDisplayIndex] = useState(-1);
    const [searchbar, setSearchbar] = useState("");

    const unreadEmails = emails.filter((email) => !email.read);
    const starredEmails = emails.filter((email) => email.starred);

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

    filteredEmails = filteredEmails.filter((email) =>
        email.title.toLowerCase().includes(searchbar.toLowerCase())
    );

    return (
        <div className="app">
            <MainNavigation
                searchbar={searchbar}
                setSearchbar={setSearchbar}
                setEmailDisplayIndex={setEmailDisplayIndex}
            />
            <SideMenu
                currentTab={currentTab}
                unreadEmails={unreadEmails}
                starredEmails={starredEmails}
                hideRead={hideRead}
                setCurrentTab={setCurrentTab}
                setHideRead={setHideRead}
                setEmailDisplayIndex={setEmailDisplayIndex}
            />
            <Emails
                filteredEmails={filteredEmails}
                toggleRead={toggleRead}
                toggleStar={toggleStar}
                emailDisplayIndex={emailDisplayIndex}
                setEmailDisplayIndex={setEmailDisplayIndex}
            />
        </div>
    );
}

export default App;
