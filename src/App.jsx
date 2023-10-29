import { useState } from 'react'

import initialEmails from './data/emails'
import Header from './components/Header'
import Emails from './components/Emails'
import LeftMenu from './components/LeftMenu'


import './styles/App.css'


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

  return (
    <div className="app">
      <Header></Header>
      <Emails emails={emails}
        hideRead={hideRead}
        currentTab={currentTab}
        toggleRead={toggleRead}
        toggleStar={toggleStar}
      />

      <LeftMenu emails={emails}
        hideRead={hideRead}
        setHideRead={setHideRead}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab} />

    </div>
  )
}

export default App
