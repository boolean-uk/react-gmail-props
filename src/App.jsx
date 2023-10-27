import { useState } from 'react'

import Header from './components/Header'
import initialEmails from './data/emails'
import Emails from './components/Emails'
import LeftMenu from './components/LeftMenu'

import './styles/App.css'

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  return (
    <div className="app">
      <Header></Header>
      <LeftMenu emails={emails} hideRead={hideRead} setHideRead={setHideRead} currentTab={currentTab} setCurrentTab={setCurrentTab}></LeftMenu>  
      <Emails emails={emails} setEmails={setEmails} hideRead={hideRead} currentTab={currentTab} />
    </div>
  )
}

export default App
