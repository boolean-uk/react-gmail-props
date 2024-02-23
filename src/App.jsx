import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'

import HeaderComponent from './components/HeaderComponent'
import LeftMenuComponent from './components/LeftMenuComponent'
import MainComponent from './components/MainComponent'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [searchValue, setSearchValue] = useState('')

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  filteredEmails = filteredEmails.filter((email) => email.title.toLowerCase().includes(searchValue.toLowerCase()))
  return (
    <div className="app">
      <HeaderComponent setCurrentTab = {setCurrentTab} setSearchValue = {setSearchValue} searchValue = {searchValue}/>
      <LeftMenuComponent emails = {emails} currentTab = {currentTab} setCurrentTab = {setCurrentTab}  hideRead = {hideRead} setHideRead = {setHideRead} />
      <MainComponent filteredEmails={filteredEmails} setEmails={setEmails} currentTab={currentTab} setCurrentTab = {setCurrentTab}/>
    </div>
  )
}

export default App
