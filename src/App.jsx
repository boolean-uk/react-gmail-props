import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'
import Emails from './components/Emails'
import Header from './components/Header'

const getReadEmails = emails => emails.filter((email) => !email.read)

const getStarredEmails = emails => emails.filter((email) => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')


  const unreadEmails = emails.filter((email) => !email.read)
  const starredEmails = emails.filter((email) => email.starred)

  {/*Extension 2 - Woriking search-bar*/}
  const [searchEmail, setSearchEmail] = useState('')
  const handleSearch = (event) => {setSearchEmail(event.target.value)}  

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

  {/*Part of Extension 2: 
    If there is something in the search-bar*/}
  if(searchEmail !== ''){
    {/*Filter based on title */}
    filteredEmails = emails.filter((email) =>
      email.title.toLowerCase().includes(searchEmail.toLowerCase())
    )
  }

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)


  return (
    <div className="app">
      {/*Handles the input in the search-bar */}
      <Header handleSearch={handleSearch}/>

      {/*Leaving the left menu untouched */}
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className={`item ${currentTab === 'inbox' ? 'active' : ''}`}
            onClick={() => setCurrentTab('inbox')}
          >
            <span className="label">Inbox</span>
            <span className="count">{unreadEmails.length}</span>
          </li>
          <li
            className={`item ${currentTab === 'starred' ? 'active' : ''}`}
            onClick={() => setCurrentTab('starred')}
          >
            <span className="label">Starred</span>
            <span className="count">{starredEmails.length}</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={hideRead}
              onChange={e => setHideRead(e.target.checked)}
            />
          </li>
        </ul>
      </nav>

      {/*Core: Renders Emails component using filterdEmails*/}     
      <Emails emails={filteredEmails} toggleRead={toggleRead}
      toggleStar={toggleStar}/>
    </div>
  )
}

export default App
