import { useState } from 'react'

import initialEmails from './data/emails'
import Emails from './components/Emails'
import SelectedEmail from './components/SelectedEmail'
import Header from './components/Header'
import LeftMenu from './components/LeftMenu'

import './styles/App.css'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [selectedEmail, setSelectedEmail] = useState(null)
  const [searchString, setSearchString] = useState("")

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)


  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  filteredEmails = filteredEmails.filter(email => {
    return email.title.toLowerCase().includes(searchString.toLowerCase())
  })

  return (
    <div className="app">
      <Header setSearchString={setSearchString} />
      <LeftMenu
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        hideRead={hideRead}
        setHideRead={setHideRead}
        unreadEmails={unreadEmails}
        starredEmails={starredEmails}
      />
      {selectedEmail ? (
        <SelectedEmail email={selectedEmail} onClick={() => setSelectedEmail(null)} />
      ):(
          <Emails emails={filteredEmails} setEmails={setEmails} setSelectedEmail={setSelectedEmail} />
        )
      }
    </div>
  )
}

export default App
