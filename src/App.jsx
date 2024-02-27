import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'
import './styles/Email.css'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  
  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

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
          <input className="search-bar" placeholder="Search mail" />
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
      <Emails emails={filteredEmails} setEmails={setEmails} />  
    </div>
  )
}

function Email ({ email, index, setEmails }) {
  const [isRendered, setIsRendered] = useState(false);

  const toggleStar = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
    setEmails(updatedEmails)
  };

  const toggleRead = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    setEmails(updatedEmails)
  };

  return (
    <>
    <li
      onClick={() => setIsRendered(!isRendered)}
      key={index}
      className={`email ${email.read ? 'read' : 'unread'}`}
    >
    <div className="select">
    <input
      className="select-checkbox"
      type="checkbox"
      checked={email.read}
      onChange={() => toggleRead(email)}
    />
    </div>
    <div className="star">
    <input
      className="star-checkbox"
      type="checkbox"
      checked={email.starred}
      onChange={() => toggleStar(email)}
    />
    </div>
    <div className="sender">{email.sender}</div>
    <div className="title">{email.title}</div>
    </li>
    {isRendered && <RenderEmail email={email} />}
    </>
  )

}

function Emails ({ emails, setEmails }) {
  return (
    <main className="emails">
      <ul>
        {emails.map((email, index) => (
          <Email  email={email} index={index} setEmails={setEmails}/> ))}
      </ul>
    </main>
  )

}

function RenderEmail({ email }){
  return (
    <div className="render-email">   
      <p>{email.title}</p>
      <p>Email image</p>
      <p>This is your email information</p>
      <button className='btn-reply'>Reply</button>
    </div>
  )

}

export default App
