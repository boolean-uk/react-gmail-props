import { useState } from "react";
import initialEmails from "./data/emails";
import "./styles/App.css";

import Header from "./components/Header/Header";
import Emails from "./components/Emails/Emails";
import Nav from "./components/Nav/Nav";
import Email from "./components/Email/Email"; 

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");

  return (
    <div className="app">
      <Header />

      <Nav
        emails={emails}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        hideRead={hideRead}
        setHideRead={setHideRead}
      />

      <Emails
        emails={emails}
        currentTab={currentTab}
        hideRead={hideRead}
        setEmails={setEmails}
      />
    </div>
  );
}
export default App;