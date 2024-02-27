import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'
import Emails from './components/Emails'
import Nav from './components/Nav'
import Header from './components/Header'
import EmailContentContainer from './components/EmailContentContainer'




function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [baseEmails, setBaseEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [showEmail, setShowEmail] = useState(false);
  const [emailToShow, setEmailToShow] = useState({});


  return (
    <div className="app">

      <Header setEmails={setEmails} initialEmails={baseEmails}/>
      <Nav {...{currentTab, setCurrentTab, setHideRead, emails}}/>
      {showEmail ?  
      <EmailContentContainer  setShowEmail={setShowEmail} emailToShow={emailToShow}/> : 
      <Emails emails={emails} 
      setEmails={setEmails} 
      hideRead={hideRead} 
      currentTab={currentTab} 
      setShowEmail={setShowEmail} 
      setEmailToShow={setEmailToShow}
      setBaseEmails={setBaseEmails}
      />
      }
    </div>
  )
}

export default App
