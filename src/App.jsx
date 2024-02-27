import { useState } from 'react'

import initialEmails from './data/emails'
import Emails from './Emails'
import EmailDisplayed from './EmailDisplayed'
import LeftMenu from './LeftMenu'

import './styles/App.css'
import backButton from './assets/back.png'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

const getSearchedEmails = emails => emails.filter(email => email.title === search)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [openEmail, setOpenEmail] = useState()
  const [search, setSearch] = useState('')
  
  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)
  const searchedEmails = emails.filter(email => (search.length !== 0) ? email.title === search : email)

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  if (search !== '') 
    filteredEmails = getSearchedEmails(filteredEmails)

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
          <input className="search-bar" placeholder="Search mail" onSubmit={(e) => setSearch(e.value)}/>
        </div>
      </header>
      <LeftMenu 
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        unreadEmails={unreadEmails}
        hideRead={hideRead}
        setHideRead={setHideRead}
        starredEmails={starredEmails}
      />
      {}
      {/* If an email is open, render a back button and the email*/}
        {openEmail 
        ? 
        <div className="open-email">
          <button className="back" onClick={() => setOpenEmail(null)}>
          </button>
          <EmailDisplayed
            title={openEmail.title}
            sender={openEmail.sender}
            setOpenEmail={setOpenEmail}
            contents={openEmail.contents}
            email={openEmail.email}
          /> 
        </div>
        : <Emails
          filteredEmails={filteredEmails}
          initialEmails={initialEmails}
          setEmails={setEmails}
          emails={emails}
          setOpenEmail={setOpenEmail}
        />
        }
    </div>
  )
}

export default App
