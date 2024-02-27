import { useState } from "react";

import initialEmails from "./data/emails";
import Emails from "./Main/Emails.jsx";
import Header from "./Header/Header.jsx";
import Nav from "./Nav/Nav.jsx";

import "./styles/App.css";

const getReadEmails = (emails) => emails.filter((email) => !email.read);

const getStarredEmails = (emails) => emails.filter((email) => email.starred);

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");

  return (
    <div className="app">
      <Header />
      <Nav
        emails={emails}
        hideRead={hideRead}
        setHideRead={setHideRead}
        getReadEmails={getReadEmails}
        getStarredEmails={getStarredEmails}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />

      <Emails
        emails={emails}
        setEmails={setEmails}
        currentTab={currentTab}
        hideRead={hideRead}
        getReadEmails={getReadEmails}
        getStarredEmails={getStarredEmails}
      />
    </div>
  );
}

export default App;
