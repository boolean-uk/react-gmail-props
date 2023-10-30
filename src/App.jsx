import { useState } from 'react'
import initialEmails from './data/emails'
import './styles/App.css'

import Header from './components/Header'
import Emails from './components/Emails'
import Nav from './components/Nav'

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  return (
    <div className="app">
      <Header />
      
      <Nav emails={emails} 
      currentTab={currentTab} 
      setCurrentTab={setCurrentTab} 
      hideRead={hideRead} 
      setHideRead={setHideRead}
      />

      <Emails emails={emails} 
      currentTab={currentTab} 
      hideRead={hideRead} 
      setEmails={setEmails} 
      />
    </div>
  )
}

export default App