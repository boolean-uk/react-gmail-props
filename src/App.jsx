import { useState } from "react";

import initialEmails from "./data/emails";

import "./styles/App.css";
import Emails from "./Emails";
import Header from "./Header";
import LeftMenu from "./LeftMenu";
import DisplayEmail from "./DisplayEmail";

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");
  const [selectedEmail, setSelectedEmail] = useState(null);

  return (
    <div className="app">
      <Header />
      <LeftMenu
        emails={emails}
        hideRead={hideRead}
        setHideRead={setHideRead}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        setSelectedEmail={setSelectedEmail}
      />
      {
        // Display email if a email is selected, or else show emails list
        selectedEmail ? (
          <DisplayEmail
            selectedEmail={selectedEmail}
            setSelectedEmail={setSelectedEmail}
          />
        ) : (
          <Emails
            emails={emails}
            setEmails={setEmails}
            hideRead={hideRead}
            currentTab={currentTab}
            setSelectedEmail={setSelectedEmail}
          />
        )
      }
    </div>
  );
}

export default App;
