import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'
import './styles/EmailDetail.css'
import Emails, { EmailDetail } from './EmailsComponent'
import Header from './HeaderComponent'
import Navigation from './NavigationComponent'



function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmail, setSelectedEmail] = useState(null);

  const getReadEmails = emails => emails.filter(email => !email.read)
  const getStarredEmails = emails => emails.filter(email => email.starred)
  const getSearchedEmails = emails => emails.filter(email =>
    ((email.sender + email.title).toLowerCase()).includes(searchTerm.toLowerCase()))

  const toggleStar = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
    setEmails(updatedEmails)
  }

  const toggleRead = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    setEmails(updatedEmails)
  }

  let filteredEmails = emails

  if (searchTerm) filteredEmails = getSearchedEmails(filteredEmails)
  if (hideRead) filteredEmails = getReadEmails(filteredEmails)
  if (currentTab === 'starred') filteredEmails = getStarredEmails(filteredEmails)

  return (
    <div className="app">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Navigation
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        unreadEmailsLength={emails.filter(email => !email.read).length}
        starredEmailsLength={emails.filter(email => email.starred).length}
        hideRead={hideRead}
        setHideRead={setHideRead}
      />
      {selectedEmail ? (
        <EmailDetail email={selectedEmail} setSelectedEmail={setSelectedEmail} />
      ) : (
        <Emails
          emails={filteredEmails}
          toggleRead={toggleRead}
          toggleStar={toggleStar}
          setSelectedEmail={setSelectedEmail}
        />
      )}
    </div>
  )
}

export default App
