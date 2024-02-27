import { useState } from 'react'
import initialEmails from './data/emails'
import Header from './components/Header'
import MainComponent from './components/MainComponent'
import MenuComponent from './components/MenuComponent'
import './styles/App.css'

const getReadEmails = emails => emails.filter(email => !email.read)
const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [showEmail, setShowEmail] = useState(true)
  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  return (
    <div className="app">
      <Header/>
      <MenuComponent filteredEmails={filteredEmails} currentTab={currentTab} hideRead={hideRead} setHideRead={setHideRead} setCurrentTab={setCurrentTab} />
      <MainComponent filteredEmails={filteredEmails} setEmails={setEmails}/>
    </div>
  )
}

export default App
