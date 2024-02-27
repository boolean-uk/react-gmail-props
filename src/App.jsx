import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'
import Header from './components/Header.jsx'
import LeftMenu from './components/LeftMenu.jsx'
import Email from './components/Emails.jsx'


const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)


function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [searchTerm, setSearchTerm] = useState('')

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  let filteredEmails = emails.filter(email => email.title.toLowerCase().includes(searchTerm.toLowerCase()))

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  return (
    <div className="app">
      <Header
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      />

      <LeftMenu
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        hideRead={hideRead}
        setHideRead={setHideRead}
        unreadEmails={unreadEmails}
        starredEmails={starredEmails}
      />

      <Email
        emails={emails}
        setEmails={setEmails}
        filteredEmails={filteredEmails}
      />
    </div>
  )
}

export default App
