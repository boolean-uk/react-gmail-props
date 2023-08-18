import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/app.css'

import Emails from './components/Emails'
import EmailView from './components/EmailView'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [openEmail, setOpenEmail] = useState(0)

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

  const [filteredEmails,setFilteredEmails] = useState(emails)

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

    //I Know it could be done way eazier but i wanted to play around with dynamicly 
    //changing the list as you type (also made it case insensitive)
  const searchTitle = (event) => {
    event.preventDefault()

    console.log(event.target.value.length)
    const temp = []
    emails.map((mail) => {
      console.log(mail.title)
      for(let i=0; i<event.target.value.length;i++){
        console.log(event.target.value[i])
        console.log(mail.title[i])
        if(mail.title[i].toUpperCase() === event.target.value[i].toUpperCase()) {
          if (!temp.includes(mail)) {
            temp.push(mail)
          }
        } else {
          if (temp.includes(mail)) {
            temp.splice(temp.indexOf(mail))
          }
        }
      }
      if (event.target.value.length === 0) {
        temp.push(mail)
      }
    })
    setFilteredEmails(temp)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="left-menu">
          <svg className="menu-icon" focusable="false" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>

          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
            alt="gmail logo"
          />
        </div>

        <div className="search">
          <input className="search-bar" placeholder="Search mail" onChange={searchTitle}/>
        </div>
      </header>
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
      {openEmail === 0 && <Emails filteredEmails={filteredEmails} toggleRead={toggleRead} toggleStar={toggleStar} setOpenEmail={setOpenEmail}/>}
      {openEmail !==0 && <EmailView email={emails.filter(email => email.id === openEmail)} setOpenEmail={setOpenEmail} toggleRead={toggleRead}/>}
    </div>
  )
}

export default App
