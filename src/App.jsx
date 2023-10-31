import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'

import Header from './Header.jsx'
import LeftMenu from './LeftMenu.jsx'
import Emails from './Emails.jsx'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')


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
      <Header/>
      <LeftMenu
      emails={emails}
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      hideRead={hideRead}
      setHideRead={setHideRead}
      />
      <Emails
      emails={emails}
      toggleStar={toggleStar}
      toggleRead={toggleRead}
      hideRead={hideRead}
      currentTab={currentTab}/>
      
    </div>
  )
}

export default App
