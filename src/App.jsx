import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import EmailList from './components/EmailList'
import EmailDetail from './components/EmailDetail';

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

export default function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [searchInput, setSearchInput] = useState('')
  const [selectedEmail, setSelectedEmail] = useState(null);

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  let filteredEmails = emails.filter(email => 
    email.title.toLowerCase().includes(searchInput) || 
    email.sender.toLowerCase().includes(searchInput));

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

    const handleEmailClick = email => {
      if (email) {
        setCurrentTab(null)
      }
      else {
        setCurrentTab('inbox')
      }

      setSelectedEmail(email)
    }

    const handleSetTab = tab => {
      if (selectedEmail) setSelectedEmail(null)
      setCurrentTab(tab)
    }

  return (
    <div className="app">
      <Header 
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setSelectedEmail={handleEmailClick}
      />

      <Sidebar 
        currentTab={currentTab} 
        setCurrentTab={handleSetTab} 
        unreadEmails={unreadEmails} 
        starredEmails={starredEmails} 
        hideRead={hideRead} 
        setHideRead={setHideRead} 
      />

      {selectedEmail ? (
        <EmailDetail
          email={selectedEmail}
        />
      ) : (
        <EmailList
          filteredEmails={filteredEmails}
          setEmails={setEmails}
          setSelectedEmail={handleEmailClick}
        />
      )}
    </div>
  )
}
