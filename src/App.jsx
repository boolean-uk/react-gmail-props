import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'
import Emails from './components/Emails'
import LeftNav from './components/LeftNav'
import Header from './components/Header'

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

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  return (
    <div className="app">
      <header className="header">
        <Header />
      </header>
      <nav className="left-menu">
        <LeftNav 
        length = {unreadEmails.length}
        currentTab = {currentTab}
        setCurrentTab = {setCurrentTab}
        unreadEmails = {unreadEmails}
        starredEmails = {starredEmails}
        hideRead = {hideRead}
        setHideRead = {setHideRead}
        />
      </nav>
      <main className="emails">
        <Emails 
          filteredEmails = {filteredEmails}
          toggleRead = {toggleRead}
          toggleStar = {toggleStar}
        />
      </main>
    </div>
  )
}

export default App
