import { useState } from 'react'
import Header from './comps/Header.jsx'
import Emails from './comps/Emails.jsx'
import LeftMenu from './comps/LeftMenu.jsx'
import EmailOpened from './comps/EmailOpened/EmailOpened.jsx'
import initialEmails from './data/emails'

import './styles/App.css'


function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [openedEmailId, setOpenedEmailId] = useState(null)
  const [searchResults, setSearchResults] = useState([])

  const openMail = (emailId) => {
    setOpenedEmailId(emailId); // Update the state with the opened email ID
  };

  const closeMail = () => {
    setOpenedEmailId(null); // Reset the opened email ID to close the opened mail
  };

  const searchEmails = (query) => {
    const filteredEmails = initialEmails.filter((email) =>
      email.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredEmails);
  }

  return (
    <div className="app">
          <Header 
          closeMail={closeMail} searchEmails={searchEmails}
          />
          <LeftMenu
        hideRead={hideRead}
        setHideRead={setHideRead}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        emails={emails}
      />
      {openedEmailId ? (
        <EmailOpened
          email={emails.find((email) => email.id === openedEmailId)}
          onClose={closeMail}
        />
      ) : (
        <Emails
          emails={searchResults.length > 0 ? searchResults : emails}
          setEmails={setEmails}
          hideRead={hideRead}
          currentTab={currentTab}
          openMail={openMail}
        />
      )}
    </div>
  )
}

export default App
