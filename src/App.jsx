import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'
import Emails from './Components/EmailList/Emails'
import Header from './Components/Header'
import LeftMenu from './Components/LeftMenu'
import PreviewEmail from './Components/PreviewEmail/PreviewEmail'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [currentEmail, setCurrentEmail] = useState(-1)

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


  const [search, setSearch] = useState('');
  if ( search != '')
    filteredEmails = emails.filter(email => email.title.includes(search))


  return (
    <div className="app">
      <Header emails={emails} search={search} setSearch={setSearch}/>
      <LeftMenu unreadEmails={unreadEmails} starredEmails={starredEmails} currentTab={currentTab} setCurrentTab={setCurrentTab} hideRead={hideRead} setHideRead={setHideRead}/>
      {currentTab === 'emails' ? 
          <PreviewEmail email={emails.find((email) => email.id == currentEmail)} emails={emails} currentEmail={currentEmail} setCurrentEmail={setCurrentEmail}/>
        : <Emails filteredEmails={filteredEmails} toggleRead={toggleRead} toggleStar={toggleStar}
        setCurrentTab={setCurrentTab} setCurrentEmail={setCurrentEmail}/>
      }
    </div>
  )
}

export default App
