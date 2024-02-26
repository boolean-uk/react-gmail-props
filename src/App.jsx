import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'
import Emails from './components/Emails'
import Nav from './components/Nav'
import Header from './components/Header'




function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')


  return (
    <div className="app">

      <Header />
      <Nav {...{currentTab, setCurrentTab, setHideRead, emails}}/>
      <Emails emails={emails} setEmails={setEmails} hideRead={hideRead} currentTab={currentTab}/>

    </div>
  )
}

export default App
