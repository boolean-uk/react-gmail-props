import { useState } from 'react'

import initialEmails from './data/emails'
import Header from './components/Header.jsx'
import LeftMenu from './components/LeftMenu.jsx'
import Emails from './components/Emails.jsx'


function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  return (
    <div className="app">
      <Header/>
      <LeftMenu currentTab = {currentTab} setCurrentTab = {setCurrentTab} emails = {emails} hideRead = {hideRead} setHideRead={setHideRead}/>
      <Emails currentTab = {currentTab} setCurrentTab = {setCurrentTab} emails = {emails} setEmails={setEmails} hideRead = {hideRead} setHideRead={setHideRead}/>
    </div>
  )
}

export default App
