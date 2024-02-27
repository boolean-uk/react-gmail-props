import { useState } from "react";

import initialEmails from "./data/emails";

import "./styles/App.css";
import Emails from "./Emails";
import Header from "./Header";
import LeftMenu from "./LeftMenu";

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");

  return (
    <div className="app">
      <Header />
      <LeftMenu
        emails={emails}
        hideRead={hideRead}
        setHideRead={setHideRead}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <Emails
        emails={emails}
        setEmails={setEmails}
        hideRead={hideRead}
        currentTab={currentTab}
      />
    </div>
  );
}

export default App;
