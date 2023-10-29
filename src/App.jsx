import { useState } from "react";

import initialEmails from "./data/emails";
import Header from "./Components/header";
import NavLeft from "./Components/NavLeft";
import Emails from "./Components/emails";

import "./styles/App.css";

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");

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

  return (
    <div className="app">
      <Header />
      <NavLeft
        emails={emails}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        hideRead={hideRead}
        setHideRead={setHideRead}
      />
      <Emails
        emails={emails}
        toggleStar={toggleStar}
        toggleRead={toggleRead}
        hideRead={hideRead}
        currentTab={currentTab}
      />
    </div>
  );
}

export default App;
