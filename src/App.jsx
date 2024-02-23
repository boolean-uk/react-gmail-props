import { useState } from 'react'

import initialEmails from './data/emails'
import Header from './Components/Header/Header'
import LeftMenu from './Components/LeftMenu/LeftMenu'
import Emails from './Components/Emails/Emails'
import SelectedEmail from './Components/Emails/Email/SelectedEmail'

import './styles/App.css'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

const getSearchEmails = (emails, search) =>
  emails.filter(email => 
    email.title.toLowerCase()
    .includes(search.toLowerCase()) 
    || email.sender.toLowerCase()
    .includes(search.toLowerCase()))

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [selectedEmail, setSelectedEmail] = useState(null)
  const [search, setSearch] = useState('')

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  if (search !== '')
    filteredEmails = getSearchEmails(filteredEmails, search)

  return (
    <div className="app">
      <Header setSearch={setSearch}/>
      <LeftMenu 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        unreadEmails={unreadEmails} 
        starredEmails={starredEmails} 
        hideRead={hideRead} 
        setHideRead={setHideRead}
      />
      {selectedEmail === null && 
        <Emails 
          filteredEmails={filteredEmails}
          setEmails={setEmails}
          setSelectedEmail={setSelectedEmail}
        />}
      {selectedEmail !== null &&
        <SelectedEmail 
          email={selectedEmail} 
          setSelectedEmail={setSelectedEmail}
        />}
    </div>
  )
}

export default App
