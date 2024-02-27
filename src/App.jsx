import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'

import Emails from './components/Emails'
import RenderedEmail from './components/RenderedEmail'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  // Keeps track of whether an email is opened, and which one
  const [openedEmail, setOpenedEmail] = useState(0)

  // Keeps track of search state
  const [search, setSearch] = useState("")

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  // filters the filteredEmails based on search
  if (search !== "")
    filteredEmails = filteredEmails.filter(email => email.title.toLowerCase().includes(search.toLowerCase()))

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
          <input className="search-bar" placeholder="Search mail" onChange={(e) => setSearch(e.target.value)}/>
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
      {// Checks if email is opened and renders it, if not renders email list
      openedEmail === 0 ? 
      (<Emails setEmails={setEmails} filteredEmails={filteredEmails} setOpenedEmail={setOpenedEmail}/>) : 
      (<RenderedEmail openedEmail={openedEmail} setOpenedEmail={setOpenedEmail}/>) 
      }
    </div>
  )
}

export default App
