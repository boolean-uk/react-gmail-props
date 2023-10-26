import { useState } from 'react'
import initialEmails from './data/emails'
import './styles/app.css'
import Header from './components/Header'
import Leftmenu from './components/Left-menu'
import Emails from './components/Emails'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

console.log("test")
function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [readthisEmail, setReadthisEmail] = useState(false)

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  const openThisMail = targetEmail => {
    
  }

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

    return (
      <div className="app">
        <Header />
        <Leftmenu unreadEmails={unreadEmails} starredEmails={starredEmails} currentTab={currentTab} setCurrentTab={setCurrentTab} hideRead={hideRead} setHideRead={setHideRead}/>
        <Emails filteredEmails={filteredEmails} toggleRead={toggleRead} toggleStar={toggleStar}/>
      </div>
    )
  }
  
  export default App
  