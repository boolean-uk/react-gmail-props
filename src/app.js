import { useState } from 'react'

import initialEmails from './data/emails.js'

import Header from './Header.js'
import Navigation from './Navigation.js'
import Emails from './Emails.js'

import './styles/app.css'

const getReadEmails = emails => emails.filter(email => !email.read)
const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

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
  //email filtering
  let filteredEmails = emails
  if (hideRead) filteredEmails = getReadEmails(filteredEmails)
  if (currentTab === 'starred') filteredEmails = getStarredEmails(filteredEmails)

  return (
    <div className="app">
      <Header />
      <Navigation 
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        hideRead={hideRead}
        setHideRead={setHideRead}
        unreadEmails={unreadEmails}
        starredEmails={starredEmails}
      />
      <main className="emails">
        <Emails emails={filteredEmails} toggleRead={toggleRead} toggleStar={toggleStar} />
      </main>
    </div>
  )
}

export default App
