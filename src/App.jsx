import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import EmailList from './components/EmailList'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

export default function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  return (
    <div className="app">
      <Header />

      <Sidebar 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        unreadEmails={unreadEmails} 
        starredEmails={starredEmails} 
        hideRead={hideRead} 
        setHideRead={setHideRead} 
      />

      <EmailList 
        filteredEmails={filteredEmails}
        setEmails={setEmails}
      />
    </div>
  )
}
