import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'
import Emails from './Emails'
import LeftMenu from './LeftMenu'
import HeaderLeftMenu from './HeaderLeftMenu'
import SearchBar from './Searchbar'
import CurrentEmail from './CurrentEmail'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

const getSearchEmails = (emails, sub) => emails.filter(email => email.title.toLocaleLowerCase().includes(sub.toLocaleLowerCase()) 
|| email.sender.toLocaleLowerCase().includes(sub.toLocaleLowerCase()))

function App() {
  const [emails, setEmails] = useState(initialEmails)

  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [showEmail, setShowEmail] = useState(null)
  const [search, setSearch] = useState('')


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
  
  if (hideRead) filteredEmails = (getReadEmails(filteredEmails))

  if (currentTab === 'starred')
    filteredEmails = (getStarredEmails(filteredEmails))
  
  if (search !== '')
    filteredEmails = getSearchEmails(filteredEmails, search)

  return (
    <div className="app">
      <header className="header">
        <HeaderLeftMenu/>
        <SearchBar setSearch={setSearch}/>

      </header>
    <LeftMenu emails={emails} currentTab={currentTab} setCurrentTab={setCurrentTab} hideRead={hideRead} setHideRead={setHideRead}/>

    {showEmail === null && <Emails filteredEmails={filteredEmails} toggleRead={toggleRead} toggleStar={toggleStar} setShowEmail={setShowEmail}/>}
    {showEmail !== null && <CurrentEmail email={showEmail} setShowEmail={setShowEmail} />}
    </div>
  )
}

export default App
