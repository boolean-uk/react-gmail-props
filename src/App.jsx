import { useState } from 'react'

import Header from './components/Header'
import initialEmails from './data/emails'
import Emails from './components/Emails'
import LeftMenu from './components/LeftMenu'
import OpenEmail from './components/OpenEmail'

import './styles/App.css'
import './components/Emails.css'

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  // EXTENSION 1 
  const [showEmail, setShowEmail] = useState(false)
  const [emailBody, setEmailBody] = useState('')

  return (
    <div className="app">
      <Header></Header>
      <LeftMenu emails={emails} hideRead={hideRead} setHideRead={setHideRead} currentTab={currentTab} setCurrentTab={setCurrentTab} setShowEmail={setShowEmail} showEmail={showEmail} />  
      {!showEmail ? (
        <Emails emails={emails} setEmails={setEmails} hideRead={hideRead} currentTab={currentTab} showEmail={showEmail} setShowEmail={setShowEmail} setEmailBody={setEmailBody} />
        ) : <OpenEmail showEmail={showEmail} setShowEmail={setShowEmail} emailBody={emailBody}></OpenEmail>
      }
    </div>
  )
}

export default App


