import { useState, useEffect } from "react";

import initialEmails from "./data/emails";

import "./styles/App.css";
import HeaderMenu from "./components/menus/header/HeaderMenu";
import LeftMenu from "./components/menus/left_menu/LeftMenu";
import Emails from "./components/menus/emails/Emails";
import EmailViewer from "./components/menus/emails/EmailViewer";


function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");
  const [displayedEmail, setDisplayedEmail] = useState(null);
  const [searchQuery, setSearchQuery] = useState("")

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

  useEffect(() => {
    let filteredList = emails
    if (searchQuery.length > 0) {
      filteredList = filteredList.filter((email) => email.title.toUpperCase().includes(searchQuery.toUpperCase()) || email.sender.toUpperCase().includes(searchQuery.toUpperCase()));
    }
    if (currentTab === "starred") {
      filteredList = filteredList.filter((email) => email.starred);
    }
    if (hideRead) {
      filteredList = filteredList.filter((email) => !email.read);
    }
    setFilteredEmails(filteredList)
  }, [emails, hideRead, currentTab, searchQuery])

  return (
    <div className="app">
      <HeaderMenu searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
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
