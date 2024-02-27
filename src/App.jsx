import { useState } from 'react'

import initialEmails from './data/emails'
import Header from './Header'
import LeftMenu from './LeftMenu'
import Inbox from './Inbox'

import './styles/App.css'

const getReadEmails = emails => emails.filter(email => !email.read)
const getStarredEmails = emails => emails.filter(email => email.starred)
const getSearchedEmails = (emails, querry) => emails.filter(email => email.title.toLowerCase().includes(querry.toLowerCase()))

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [hideRead, setHideRead] = useState(false)
  const [searchQuerry, setSearchQuerry] = useState('')

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

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

    const sendSearchQuerry = target => setSearchQuerry(target.target.value)

  let filteredEmails = emails
  if (hideRead) filteredEmails = getReadEmails(filteredEmails)
  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  if (searchQuerry.length !== 0)
    filteredEmails = getSearchedEmails(filteredEmails, searchQuerry)

  if (filteredEmails === undefined || filteredEmails === null) filteredEmails = []

  return (
    <div className="app">
      <Header sendSearchQuerry={sendSearchQuerry} />
      <LeftMenu setCurrentTab={setCurrentTab} setHideRead={setHideRead} currentTab={currentTab} unreadEmails={unreadEmails} starredEmails={starredEmails} />
      <Inbox mails={filteredEmails} toggleRead={toggleRead} toggleStar={toggleStar} />
    </div>
  )
}

export default App
