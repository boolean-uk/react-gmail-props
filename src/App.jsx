import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'
import HeaderComponent from './components/Header'
import LeftMenuComponent from './components/Left-Menu'
import EmailsComponent from './components/Emails'
import emails from './data/emails'

const getReadEmails = emails => emails.filter(email => !email.read)
const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [selectedEmail, setSelectedEmail] = useState()
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [search, setSearch] = useState('')

  const getSearchedEmails = emails => emails.filter(email => email.title.includes(search))

  let filteredEmails = emails
  if (hideRead) filteredEmails = getReadEmails(filteredEmails)
  if (currentTab === 'starred') filteredEmails = getStarredEmails(filteredEmails)
  if (search !== "") filteredEmails = getSearchedEmails(filteredEmails)

  return (
    <div className="app">
      <HeaderComponent setSearch={setSearch} />
      <LeftMenuComponent
        emails={emails}
        setEmails={setEmails}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        hideRead={hideRead}
        setHideRead={setHideRead}
      />
      <EmailsComponent
        setEmails={setEmails}
        filteredEmails={filteredEmails}
        selectedEmail={selectedEmail}
        setSelectedEmail={setSelectedEmail}
      />
    </div>
  )
}

export default App
