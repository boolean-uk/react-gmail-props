import { useState } from "react";

import initialEmails from "./data/emails";

import "./styles/App.css";
import Header from "./Components/Header/Header";
import LeftMenu from "./Components/LeftMenu/LeftMenu";
import EmailView from "./Components/EmailView/EmailView";

const getReadEmails = (emails) => emails.filter((email) => !email.read);

const getStarredEmails = (emails) => emails.filter((email) => email.starred);

const searchByName = (emails, searchString) =>
  emails.filter((email) => {
    const emailTitle = email.title.toLowerCase();
    return emailTitle.includes(searchString.toLowerCase());
  });

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");
  const [showEmail, setShowEmail] = useState(false);
  const [openedEmail, setOpenedEmail] = useState(initialEmails[0]);
  const [searchString, setSearchString] = useState("");

  let filteredEmails = emails;

  if (searchString != "")
    filteredEmails = searchByName(filteredEmails, searchString);
  if (hideRead) filteredEmails = getReadEmails(filteredEmails);

  if (currentTab === "starred")
    filteredEmails = getStarredEmails(filteredEmails);

  return (
    <div className="app">
      <Header setSearchString={setSearchString} />
      <LeftMenu
        currentTab={currentTab}
        emails={emails}
        setCurrentTab={setCurrentTab}
        hideRead={hideRead}
        setHideRead={setHideRead}
      />
      <EmailView
        filteredEmails={filteredEmails}
        setEmails={setEmails}
        showEmail={showEmail}
        setShowEmail={setShowEmail}
        setOpenedEmail={setOpenedEmail}
        openedEmail={openedEmail}
      />
    </div>
  );
}

export default App;
