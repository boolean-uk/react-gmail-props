import React, { useState } from 'react'
import Header from './components/Header'
import initialEmails from './data/emails'
import EmailPage from './views/EmailPage'
import HomePage from './views/HomePage'
import './styles/app.css'

function App() {

  const [emails, setEmails] = useState(initialEmails);
  const [currentTab, setCurrentTab] = useState("inbox");
  const [hideRead, setHideRead] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  function toggleRead(emailId) {
    setEmails((prevEmails) =>
      prevEmails.map((email) =>
        email.id === emailId ? { ...email, read: !email.read } : email
      )
    );
  }

  function toggleStar(emailId) {
    setEmails((prevEmails) =>
      prevEmails.map((email) =>
        email.id === emailId ? { ...email, starred: !email.starred } : email
      )
    );
  }

  let filteredEmails;

  if (currentTab === "inbox") {
    filteredEmails = emails;
  } else if (currentTab === "starred") {
    filteredEmails = emails.filter((email) => email.starred);
  }

  filteredEmails = filteredEmails.filter((email) =>
    email.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  filteredEmails = filteredEmails.filter((email) => !hideRead || !email.read);

  function openEmail(emailId) {
    setSelectedEmail(emailId);
  }

  function goBackToInbox() {
    setSelectedEmail(null);
  }

  return (
    <div className="app">
      <Header
        emails={emails}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        hideRead={hideRead}
        setHideRead={setHideRead}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <main className="emails">
        {selectedEmail ? (
          <EmailPage
            email={emails.find((email) => email.id === selectedEmail)}
            goBack={goBackToInbox}
          />
        ) : (
          <HomePage
            emails={filteredEmails}
            toggleRead={toggleRead}
            toggleStar={toggleStar}
            openEmail={openEmail}
            currentTab={currentTab}
            hideRead={hideRead}
            filteredEmails={filteredEmails}
          />
        )}
      </main>
    </div>
  );
}

export default App;