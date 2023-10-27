import { useState } from 'react'
import InboxList from './components/InboxList.jsx'
import Header from './components/Header.jsx'
import Emails from './components/Emails.jsx'


import initialEmails from './data/emails'

import './styles/App.css'

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
      <Header/>
      <nav className="left-menu">
      <InboxList 
          currentTab={currentTab} 
          setCurrentTab={setCurrentTab} 
          unreadEmails={unreadEmails} 
          starredEmails={starredEmails} 
          hideRead={hideRead} 
          setHideRead={setHideRead}/> 
      </nav>
      <Emails 
        filteredEmails={filteredEmails} 
        toggleRead={toggleRead} 
        toggleStar={toggleStar}/>
    </div>
  )
}

export default App
