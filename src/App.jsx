import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'
import Header from './Components/Header'
import Emails from './Components/Emails'
import LeftMenu from './Components/LeftMenu'
import EmailDisplay from './Components/EmailDisplay'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  //Extension 1
  const [displayEmail, setDisplayEmail] = useState("");
  


  // Passed into emails component
  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  const toggleStar = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
    setEmails(updatedEmails)
  }

  const toggleRead = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    setEmails(updatedEmails)
  }

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)


  //Extension 1 Start


  let display = < Emails filteredEmails={filteredEmails} toggleRead={toggleRead} toggleStar={toggleStar} setDisplayEmail={setDisplayEmail}/>
  if (displayEmail !== "") {
    display = < EmailDisplay displayEmail={displayEmail} setDisplayEmail={setDisplayEmail}/>
  }

  // Extension 1 End


  // Extension 2 start

  // Stora and updater of search state
  const [search, setSearch] = useState("");

  // Updates search state when search bar changes in heder component
  const  searcher = e => {
    setSearch(e.target.value)
  }

  // Function for filtering emails based on search. chacks of any of the email title includes the search, in lower case 
  // search finds email title and/or sender
  const getSearchEmails = filteredEmails => filteredEmails.filter(email => 
    email.title.toLowerCase().includes(search.toLocaleLowerCase()) ||
    email.sender.toLowerCase().includes(search.toLocaleLowerCase()))

  // If search bar is empty do nothing
  // If not empty, then filter already filtered emails with the filter search email function
  if (search !== "") filteredEmails = getSearchEmails(filteredEmails)

  // The sercher function is passed into the header component below

  // End Extension 2


  return (
    <div className="app">
      
      < Header searcher={searcher}/>
    
      < LeftMenu 
        currentTab={currentTab}
        unreadEmails={unreadEmails}
        starredEmails={starredEmails}
        hideRead={hideRead}
        setCurrentTab={setCurrentTab} 
        setHideRead={setHideRead}
        />

      {display}
    </div>
  )
}

export default App
