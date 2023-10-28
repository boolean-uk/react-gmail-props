import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'
import Header from './Components/Header'
import LeftMenu from './Components/LeftMenu'
import Emails from './Components/Emails'

const getReadEmails = emails => emails.filter(email => email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
    const [emails, setEmails] = useState(initialEmails);
    const [hideRead, setHideRead] = useState(false);
    const [currentTab, setCurrentTab] = useState("inbox");


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

    const unreadEmails = emails.filter(email => !email.read)
    const starredEmails = emails.filter(email => email.starred)

  return (
    <div className="app">
      <Header />
      <LeftMenu 
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        hideRead={hideRead}
        setHideRead={setHideRead}
        unreadEmails={unreadEmails}
        starredEmails={starredEmails}
      />
      <Emails 
      filteredEmails={filteredEmails}
      toggleRead={toggleRead}
      toggleStar={toggleStar}
      setEmails={setEmails}
      />
    </div>
  )
}

export default App
