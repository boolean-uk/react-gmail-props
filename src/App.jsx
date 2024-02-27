import { useState } from "react";
import initialEmails from "./data/emails";
import "./styles/App.css";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import Emails from "./components/Emails";
import EmailDetails from "./components/EmailDetails";

const getReadEmails = (emails) => emails.filter((email) => !email.read);
const getStarredEmails = (emails) => emails.filter((email) => email.starred);

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [searchQuery, setSearchQuery] = useState("");
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");
  const [selectedEmail, setSelectedEmail] = useState(null);

  const unreadEmails = emails.filter((email) => !email.read);
  const starredEmails = emails.filter((email) => email.starred);

  const toggleStar = (targetEmail) => {
    const updatedEmails = emails.map((email) =>
      email.id === targetEmail.id
        ? { ...email, starred: !email.starred }
        : email
    );
    setEmails(updatedEmails);
  };

  const toggleRead = (targetEmail) => {
    const updatedEmails = emails.map((email) =>
      email.id === targetEmail.id ? { ...email, read: !email.read } : email
    );
    setEmails(updatedEmails);
  };

  let filteredEmails = emails;
  if (hideRead) filteredEmails = getReadEmails(filteredEmails);
  if (currentTab === "starred")
    filteredEmails = getStarredEmails(filteredEmails);

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };

  const handleBackToList = () => {
    setSelectedEmail(null);
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const searchList = initialEmails.filter((email) => {
      return (
        email.sender.toLowerCase().includes(query.toLowerCase()) ||
        email.title.toLowerCase().includes(query.toLowerCase())
      );
    });

    setEmails(searchList);
  };

  return (
    <div className="app">
      <Header handleSearch={handleSearch} searchQuery={searchQuery} />
      <LeftMenu
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        unreadEmails={unreadEmails}
        starredEmails={starredEmails}
        hideRead={hideRead}
        setHideRead={setHideRead}
      />
      {selectedEmail ? (
        <EmailDetails
          email={selectedEmail}
          handleBack={handleBackToList}
          toggleStar={toggleStar}
          toggleRead={toggleRead}
        />
      ) : (
        <Emails
          filteredEmails={filteredEmails}
          toggleRead={toggleRead}
          toggleStar={toggleStar}
          handleEmailClick={handleEmailClick}
        />
      )}
    </div>
  );
}

export default App;
