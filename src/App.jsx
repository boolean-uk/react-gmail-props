
import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'

import Header from './components/Header/Header.jsx'
import LeftMenu from './components/Left-Menu/Left-Menu.jsx'
import Emails from './components/Emails/Emails.jsx'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  


  return (
    <div className="app">
      <Header/>
      <LeftMenu emails={emails}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          hideRead={hideRead}
          setHideRead={setHideRead}/>
      <Emails
          emails={emails}
          setEmails={setEmails}
          hideRead={hideRead}
          currentTab={currentTab}
          getReadEmails={getReadEmails}
          getStarredEmails={getStarredEmails} />
    </div>
  )
}

export default App
