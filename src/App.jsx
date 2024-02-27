import React, { useState } from "react";
import initialEmails from "./data/emails";
import "./styles/App.css";
import Emails from "./components/Emails";
import Header from "./components/Header";
import EmailDisplay from "./components/EmailDisplay";
import Navigation from "./components/Navigation";

const getReadEmails = (emails) => emails.filter((email) => !email.read);
const getStarredEmails = (emails) => emails.filter((email) => email.starred);

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");
  const [selectedEmail, setSelectedEmail] = useState(null);

  const unreadEmails = emails.filter((email) => !email.read);
  const starredEmails = emails.filter((email) => email.starred);

  const toggleStar = (targetEmail) => {
    const updatedEmails = emails.map((email) =>
      email.id === targetEmail.id
        ? { ...email, starred: !email.starred }
        : email
    );
    setEmails(updatedEmails);
  };

  const toggleRead = (targetEmail) => {
    const updatedEmails = emails.map((email) =>
      email.id === targetEmail.id ? { ...email, read: !email.read } : email
    );
    setEmails(updatedEmails);
  };

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };
  const handleReturnInbox = () => {
    setSelectedEmail(null);
  };

  let filteredEmails = emails;

  if (hideRead) filteredEmails = getReadEmails(filteredEmails);

  if (currentTab === "starred")
    filteredEmails = getStarredEmails(filteredEmails);

  const handleSearch = (query) => {
    const filtered = initialEmails.filter((email) =>
      email.title.toLowerCase().includes(query.toLowerCase())
    );
    setEmails(filtered);
  };

  return (
    <div className="app">
      <Header handleSearch={handleSearch} />
      <Navigation
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        unreadEmailsCount={unreadEmails.length}
        starredEmailsCount={starredEmails.length}
        hideRead={hideRead}
        setHideRead={setHideRead}
      />
      {selectedEmail ? (
        <EmailDisplay handleReturnInbox={handleReturnInbox} />
      ) : (
        <Emails
          filteredEmails={filteredEmails}
          toggleStar={toggleStar}
          toggleRead={toggleRead}
          setSelectedEmail={handleEmailClick}
        />
      )}
    </div>
  );
}

export default App;
