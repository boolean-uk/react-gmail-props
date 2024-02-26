import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'
import Emails from './Components/Emails'
import Header from './Components/Header'
import LeftMenu from './Components/LeftMenu'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  const [search, setSearch] = useState("")

  const searchEmails = emails => 
      emails.filter(email => 
        email.title.toLowerCase().includes(search.toLowerCase()) || email.sender.toLowerCase().includes(search.toLowerCase()))

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

  if (search !== "") filteredEmails = searchEmails(filteredEmails)

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch}/>
      <LeftMenu
        unreadEmails={unreadEmails}
        starredEmails={starredEmails}
        hideRead={hideRead}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        setHideRead={setHideRead}
      />
      <Emails
        filteredEmails={filteredEmails}
        toggleRead={toggleRead}
        toggleStar={toggleStar}
      />
    </div>
  )
}

export default App
