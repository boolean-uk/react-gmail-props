import { useState } from "react";

import initialEmails from "./data/emails";

import "./styles/App.css";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import MainContent from "./MainContent";

const getReadEmails = (emails) => emails.filter((email) => !email.read);

const getStarredEmails = (emails) => emails.filter((email) => email.starred);

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");
  const [activeEmail, setActiveEmail] = useState(null);

  const unreadEmails = emails.filter((email) => !email.read);
  const starredEmails = emails.filter((email) => email.starred);

  return (
    <div className="app">
      <Header />
      <NavigationBar
        unreadEmails={unreadEmails}
        starredEmails={starredEmails}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
        hideRead={hideRead}
        setHideRead={setHideRead}
      />
      <MainContent
        emails={emails}
        setEmails={setEmails}
        hideRead={hideRead}
        currentTab={currentTab}
        getReadEmails={getReadEmails}
        getStarredEmails={getStarredEmails}
        activeEmail={activeEmail}
        setActiveEmail={setActiveEmail}
      />
    </div>
  );
}

export default App;
