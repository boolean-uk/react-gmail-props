import { useState } from 'react'
import Header from './comps/Header.jsx'
import Emails from './comps/Emails.jsx'
import LeftMenu from './comps/LeftMenu.jsx'
import initialEmails from './data/emails'
import './styles/App.css'


function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  return (
    <div className="app">
          <Header />
          <LeftMenu
              hideRead={hideRead}
              setHideRead={setHideRead}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              emails={emails}
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
