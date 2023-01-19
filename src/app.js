import { useState } from 'react'

import Emails from './Emails.js'
import initialEmails from './data/emails'
import Email from './Email.js'

import Header from './Header.js'
import LeftMenu from './LeftMenu.js'

import './styles/app.css'

function App() {

  const [currentTab, setCurrentTab] = useState('inbox')

  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)

  const getReadEmails = emails => emails.filter(email => !email.read)

  const getStarredEmails = emails => emails.filter(email => email.starred)

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

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)


  return (
    <div className="app">
      <Header />

      <LeftMenu />

      {/* will propbably group the two below */}
      <Email filteredEmails={filteredEmails} />
      <Emails />
    </div>
  )
}

export default App
