import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'

import HeaderComponent from './Components/HeaderComponent'
import NavComponent from './Components/NavComponent'
import MainComponent from './Components/MainComponent'

const getReadEmails = emails => emails.filter(email => !email.read) // iterates through each email object in the array and includes only those where email.read is false

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')


  let filteredEmails = emails

  if (hideRead) 
    filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  return (
    <div className="app">

      <HeaderComponent/>

      <NavComponent
      emails={emails}
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      hideRead={hideRead}
      setHideRead={setHideRead}
      />

      <MainComponent
      filteredEmails={filteredEmails}
      setEmails={setEmails} //behöver ej skicka med 'emails' för att den skickas med automatiskt med 'setEmails'
      />

    </div>
  )
}

export default App
