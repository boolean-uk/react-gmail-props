import { useState, useEffect } from 'react'
import './styles/App.css'
import initialEmails from './data/emails'
import EmailView from "./Components/EmailView/EmailView.jsx"
import Emails from "./Components/Emails/Emails.jsx"
import Header from "./Components/Header/Header.jsx"
import Navigation from "./Components/Navigation/Navigation.jsx"

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  const [showEmailDetails, setShowEmailDetails] = useState(false)
  const [targetEmailIndex, setTargetEmailIndex] = useState(0)
  const [email, setEmail] = useState(emails[0])

  const [searchQuery, setSearchQuery] = useState("")

  
  useEffect(() => {
    setEmail(emails.at(targetEmailIndex))
  }, [emails, targetEmailIndex])
  
  
  return (
    <div className="app">
      <Header setSearchQuery={setSearchQuery}/>
      <Navigation 
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        emails={emails}
        hideRead={hideRead}
        setHideRead={setHideRead}
      />
      {showEmailDetails ? (
        <EmailView 
          email={email} 
          setTarget={setTargetEmailIndex}
          emailCount={emails.length}
          setEmails={setEmails}
          showDetails={setShowEmailDetails}
        />
      ): (
        <Emails 
        emails={emails} 
        setEmails={setEmails} 
        hideRead={hideRead}
        currentTab={currentTab}
        setTarget={setTargetEmailIndex}
        showDetails={setShowEmailDetails}
        searchQuery={searchQuery}
      />)}
    </div>
  )
}

export default App
