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
  const [searchWord, setSearchWord] = useState('')

  let filteredEmails = emails
  let searchedEmail = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred'){
    filteredEmails = getStarredEmails(filteredEmails)
  }

  if (searchWord.trim() !== '') {
    searchedEmail = filteredEmails.filter(email =>
      email.title.toLowerCase().includes(searchWord.toLowerCase())
    )
  } else {
    searchedEmail = filteredEmails
  }

  return (
    <div className="app">
      <Header searchedWord={searchWord} setSearchWord={setSearchWord}/>
      <MenuComponent filteredEmails={filteredEmails} currentTab={currentTab} hideRead={hideRead} setHideRead={setHideRead} setCurrentTab={setCurrentTab}/>
      <MainComponent filteredEmails={searchedEmail} setEmails={setEmails}/>
    </div>
  )
}

export default App
