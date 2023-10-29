import { useState } from 'react'

import initialEmails from './data/emails'

import Header from './Components/Header'

import Navbar from './Components/Navbar'

import Emails from './Components/Emails'

import './styles/App.css'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

 
 

  return (
    <div className="app">
      
      <Header></Header>
      <Navbar emails={emails} hideRead={hideRead} setHideRead={setHideRead} currentTab={currentTab} setCurrentTab={setCurrentTab}></Navbar>
      <Emails    emails={emails}
          setEmails={setEmails}
          hideRead={hideRead}
          currentTab={currentTab}
          getReadEmails={getReadEmails}
          getStarredEmails={getStarredEmails}/>
    </div>
  )
}

export default App
