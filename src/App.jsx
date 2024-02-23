import { useState } from 'react'
import './styles/App.css'
import initialEmails from './data/emails'
import Emails from "./Components/Emails/Emails.jsx"
import Header from "./Components/Header/Header.jsx"
import Navigation from "./Components/Navigation/Navigation.jsx"

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  return (
    <div className="app">
      <Header/>
      <Navigation 
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        emails={emails}
        hideRead={hideRead}
        setHideRead={setHideRead}
      />
      <Emails 
        emails={emails} 
        setEmails={setEmails} 
        hideRead={hideRead}
        currentTab={currentTab}
      />
    </div>
  )
}

export default App
