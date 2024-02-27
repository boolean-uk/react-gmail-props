import { useState } from 'react'

import initialEmails from './data/emails'
import ListOfEmails from './components/Emails'
import Article from './components/Article'
import EmailToolbar from './components/EmailToolbar.jsx'

import './styles/App.css'
import './styles/ReplyForm.css'
import './styles/emailToolbar.css'
import './styles/emailContent.css'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [activeEmail, setActiveEmail] = useState(false)
  const [searchWord, setSearchValue] = useState('')

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  let filteredEmails = emails.filter(email => email.title.includes(searchWord));
  let main;


  function setActive(e){
    let email = filteredEmails.filter(emails => emails.title === e.target.innerHTML)
    setActiveEmail(email)
  }
  function handleBackBtn(){
    setActiveEmail(false)
  }
  function search(){
    setSearchValue(document.querySelector('.search-bar').value)
  }

  if (hideRead) {filteredEmails = getReadEmails(filteredEmails)}

  if (currentTab === 'starred'){
    filteredEmails = getStarredEmails(filteredEmails)}

  if(activeEmail !== false){
    main = 
    <>
    <EmailToolbar bckBtn={handleBackBtn}/>
    <Article email={activeEmail} setActive={e=>setActive(e)}/></>
  }else{
    main = <><div><nav className="email-toolbar email-content--header">
    <ul>
    </ul>
    <div className="space"></div>
    <div>
      <p>1 of 1</p>
      <button>&lt;</button>
      <button>&gt;</button>
    </div>
    </nav></div><ListOfEmails 
    filteredEmails={filteredEmails} 
    setEmails={setEmails}
     setActive={setActive}/></>
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
          <input className="search-bar" placeholder="Search mail" onChange={()=>search()}/>
        </div>
      </header>
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className={`item ${currentTab === 'inbox' ? 'active' : ''}`}
            onClick={() => {setCurrentTab('inbox'); setActiveEmail(false)}}
          >
            <span className="label">Inbox</span>
            <span className="count">{unreadEmails.length}</span>
          </li>
          <li
            className={`item ${currentTab === 'starred' ? 'active' : ''}`}
            onClick={() => {setCurrentTab('starred'); setActiveEmail(false)}}
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
      <div>
     {main}</div>
    </div>
  )
}

export default App
