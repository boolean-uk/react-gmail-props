import './styles/App.css'
import { useState } from 'react'

import initialEmails from './data/emails'
import HeaderComponent from './components/Header'
import LeftMenuComponent from './components/LeftMenu'
import EmailsComponent from './components/Emails'

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  return (
    <div className="app">
      <HeaderComponent />
      <LeftMenuComponent currentTab={currentTab} emails={emails} hideRead={hideRead} setCurrentTab={setCurrentTab} setHideRead={setHideRead}/>
      <EmailsComponent emails={emails} setEmails={setEmails} hideRead={hideRead} currentTab={currentTab}/>
    </div>
  )
}

export default App
