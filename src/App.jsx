import { useState } from "react";

import initialEmails from "./data/emails";

import "./styles/App.css";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import Emails from "./components/Emails";

const getReadEmails = (emails) => emails.filter((email) => !email.read);

const getStarredEmails = (emails) => emails.filter((email) => email.starred);

const getEmailsBySearch = (emails, searchWord) =>
  emails.filter((email) =>
    email.title.toLowerCase().startsWith(searchWord.toLowerCase())
  );

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");
  const [currentEmail, setCurrentEmail] = useState(null);
  const [currentSearch, setCurrentSearch] = useState("");

  let filteredEmails = emails;

  if (hideRead) filteredEmails = getReadEmails(filteredEmails);

  if (currentTab === "starred")
    filteredEmails = getStarredEmails(filteredEmails);

  if (currentSearch !== "")
    filteredEmails = getEmailsBySearch(filteredEmails, currentSearch);
  return (
    <div className="app">
      <Header setCurrentSearch={setCurrentSearch} />
      <LeftMenu
        emails={emails}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        hideRead={hideRead}
        setHideRead={setHideRead}
        setCurrentEmail={setCurrentEmail}
      />
      <Emails
        filteredEmails={filteredEmails}
        setEmails={setEmails}
        currentEmail={currentEmail}
        setCurrentEmail={setCurrentEmail}
      />
    </div>
  );
}

export default App;
