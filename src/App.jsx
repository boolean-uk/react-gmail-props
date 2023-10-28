import Header from './Components/Header/Header.jsx'
import LeftMenu from './Components/Left-Menu/Left-menu.jsx'
import Emails from './Components/Emails/Emails.jsx'
import { useState } from 'react'
import initialEmails from './data/emails'
import './styles/App.css'
import './Components/Emails/Emails.css'


const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {

  const [currentTab, setCurrentTab] = useState('inbox')
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)

  return (
    <div className="app">

      <Header />

      <LeftMenu emails={emails}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        hideRead={hideRead}
        setHideRead={setHideRead} />

      <Emails emails={emails}
        setEmails={setEmails}
        hideRead={hideRead}
        currentTab={currentTab}
        getReadEmails={getReadEmails}
        getStarredEmails={getStarredEmails} />

    </div>
  )
}

export default App
