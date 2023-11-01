import { useState } from "react";
import initialEmails from "./data/emails";
import "./styles/App.css";

import Header from "./components/Header/Header.jsx";
import Emails from "./components/Emails/Emails.jsx";
import Nav from "./components/Nav/Nav.jsx";

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
