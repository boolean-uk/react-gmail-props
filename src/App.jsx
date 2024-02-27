import { useState } from "react";

import initialEmails from "./data/emails";

import "./styles/App.css";
import HeaderMenu from "./components/menus/header/HeaderMenu";
import LeftMenu from "./components/menus/left_menu/LeftMenu";
import Emails from "./components/menus/emails/Emails";
import EmailViewer from "./components/menus/emails/EmailViewer";

const getReadEmails = (emails) => emails.filter((email) => !email.read);

const getStarredEmails = (emails) => emails.filter((email) => email.starred);

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");
  const [displayedEmail, setDisplayedEmail] = useState(null);

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
      <HeaderMenu />
      <LeftMenu
        currentTab={currentTab}
        unreadEmailsCount={unreadEmails.count}
        starredEmailsCount={starredEmails.count}
        hideRead={hideRead}
        setCurrentTab={setCurrentTab}
        setHideRead={setHideRead}
      />
      {displayedEmail === null ? (
        <Emails
          filteredEmails={filteredEmails}
          toggleRead={toggleRead}
          toggleStar={toggleStar}
          setDisplayedEmail={setDisplayedEmail}
        />
      ) : (
        <EmailViewer
          emailData={displayedEmail}
          setDisplayedEmail={setDisplayedEmail}
        />
      )}
    </div>
  );
}

export default App;
