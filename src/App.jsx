import { useState } from "react";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import Emails from "./components/Emails";
import EmailDetail from "./components/EmailDetail";
import useEmails from "./hooks/useEmails";
import "./styles/App.css";

function App() {
  const {
    emails: allEmails,
    hideRead,
    setHideRead,
    currentTab,
    setCurrentTab,
    toggleStar,
    toggleRead,
  } = useEmails();

  const [selectedEmail, setSelectedEmail] = useState(null); // new state variable for the selected email
  const [searchTerm, setSearchTerm] = useState(""); // new state variable for the search term

  // filter emails based on the search term and the current tab
  const emails = allEmails.filter(
    (email) =>
      email.title.includes(searchTerm) &&
      (currentTab === "inbox" || (currentTab === "starred" && email.starred))
  );

  const unreadEmails = emails.filter((email) => !email.read);
  const starredEmails = emails.filter((email) => email.starred);

  // new function to handle search input changes
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="app">
      <Header onSearch={handleSearch} />{" "}
      {/* pass the handlesearch function as a prop to Header */}
      <LeftMenu
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        unreadEmails={unreadEmails}
        starredEmails={starredEmails}
        hideRead={hideRead}
        setHideRead={setHideRead}
      />
      {selectedEmail ? ( // conditional rendering of Emails or EmailDetail
        <EmailDetail
          email={selectedEmail}
          onBack={() => setSelectedEmail(null)}
        />
      ) : (
        <Emails
          emails={emails}
          toggleStar={toggleStar}
          toggleRead={toggleRead}
          onSelectEmail={setSelectedEmail}
        />
      )}
    </div>
  );
}

export default App;
