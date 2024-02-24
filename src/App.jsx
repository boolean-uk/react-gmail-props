import { useState } from "react";

import initialEmails from "./data/emails";

import "./styles/App.css";
import Emails from "./Emails";
import DisplayEmail from "./DisplayEmail";

const getReadEmails = (emails) => emails.filter((email) => !email.read);
const getStarredEmails = (emails) => emails.filter((email) => email.starred);

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");
  const [searchInput, setSearchInput] = useState("");
  const [showEmail, setShowedEmail] = useState("");
  const [showToggle, setShowToggle] = useState(false);

  const searchItems = (val) => {
    if (val === "") {
      setSearchInput("");
      setEmails(initialEmails);
    } else {
      setSearchInput(val);
      const filteredEmails = emails.filter((email) => {
        return email.title.toLowerCase().includes(searchInput.toLowerCase());
      });
      setEmails(filteredEmails);
    }
  };

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

  const toggleReturn = () => {
    setEmails(initialEmails);
    setShowedEmail("");
    setShowToggle(false);
  };

  const showState = (email) => {
    setShowToggle(true);
    setShowedEmail(email);
  };

  const toggleRead = (targetEmail) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      );
    setEmails(updatedEmails);
  };

  let filteredEmails = emails;

  if (hideRead) filteredEmails = getReadEmails(filteredEmails);

  if (currentTab === "starred")
    filteredEmails = getStarredEmails(filteredEmails);

  return (
    <div className="app">
      <header className="header">
        <div className="left-menu">
          <svg className="menu-icon" focusable="false" viewBox="0 0 24 24">
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
            onChange={(e) => searchItems(e.target.value)}
          />
        </div>
      </header>

      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className={`item ${currentTab === "inbox" ? "active" : ""}`}
            onClick={() => setCurrentTab("inbox")}
          >
            <span className="label">Inbox</span>
            <span className="count">{unreadEmails.length}</span>
          </li>
          <li
            className={`item ${currentTab === "starred" ? "active" : ""}`}
            onClick={() => setCurrentTab("starred")}
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

      {showToggle ? (
        <div className="display">
          <DisplayEmail
            sender={showEmail.sender}
            title={showEmail.title}
            text={showEmail.text}
            toggleReturn={toggleReturn}
          />
        </div>
      ) : (
        <Emails
          filteredEmails={filteredEmails}
          toggleRead={toggleRead}
          toggleStar={toggleStar}
          showState={showState}
          showToggle={showToggle}
        />
      )}
    </div>
  );
}

export default App;
