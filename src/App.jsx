import { useState } from "react";

import initialEmails from "./data/emails";

import "./styles/App.css";
import Emails from "./Emails.jsx";
import Header from "./Header";
import LeftMenu from "./LeftMenu";
import OpenEmail from "./OpenEmail.jsx";

const getReadEmails = (emails) => emails.filter((email) => !email.read);

const getStarredEmails = (emails) => emails.filter((email) => email.starred);

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");
  const [opened, setOpenEmail] = useState(false);

  const unreadEmails = emails.filter((email) => !email.read);
  const starredEmails = emails.filter((email) => email.starred);

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

  let filteredEmails = emails;

  if (hideRead) filteredEmails = getReadEmails(filteredEmails);

  if (currentTab === "starred")
    filteredEmails = getStarredEmails(filteredEmails);

  const SetOpen = () => {
    setOpenEmail(true);
    console.log("Opening");
  };
  const SetClosed = () => {
    setOpenEmail(false);
    console.log("Closing");
  };

  return (
    <div className="app">
      <Header />
      <LeftMenu
        setHideRead={setHideRead}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
        unreadEmails={unreadEmails}
        starredEmails={starredEmails}
        hideRead={hideRead}
      />
      <div>
        {opened ? (
          <OpenEmail SetClosed={SetClosed} />
        ) : (
          <Emails
            filteredEmails={filteredEmails}
            toggleRead={toggleRead}
            toggleStar={toggleStar}
            SetOpen={SetOpen}
          />
        )}
      </div>
    </div>
  );
}

export default App;
