import { useState } from 'react'
import initialEmails from './data/emails.js'
import Header from './Header.js'
import Navigation from './Navigation.js'
import Emails from './Emails.js'
import DisplayEmail from './DisplayEmail.js'
import './styles/app.css'

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [selectedEmail, setSelectedEmail] = useState(null) //state for displaying email
  const [searchTerm, setSearchTerm] = useState('') //state for search

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  const getReadEmails = emails => emails.filter(email => !email.read)
  const getStarredEmails = emails => emails.filter(email => email.starred)

  const toggleStar = targetEmail => {
    const updatedEmails = emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
    setEmails(updatedEmails)
  }

  const toggleRead = targetEmail => {
    const updatedEmails = emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    setEmails(updatedEmails)
  }
  //email filtering
  let filteredEmails = emails.filter(email =>
    email.title.toLowerCase().includes(searchTerm.toLowerCase())) // makes the search case-insensitive
  if (hideRead) filteredEmails = getReadEmails(filteredEmails)
  if (currentTab === 'starred') filteredEmails = getStarredEmails(filteredEmails)
///
  return (
    <div className="app">
      <Header
      searchTerm={searchTerm}
      onSearchChange={setSearchTerm} />
      <Navigation 
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        hideRead={hideRead}
        setHideRead={setHideRead}
        unreadEmails={unreadEmails}
        starredEmails={starredEmails}
      />
      <main className="emails">
        {selectedEmail ? (
          <DisplayEmail email={selectedEmail} 
          onBack={() => setSelectedEmail(null)} /> ) :
        (<Emails 
          emails={filteredEmails}
          toggleRead={toggleRead}
          toggleStar={toggleStar} 
          onSelectEmail={email => setSelectedEmail(email)} /> // adding onSelectEmail to accept the prop from it   
        // checking if condition is true or false, if selectedEmail exist or not
        )}
      </main>
    </div>
  )
}

export default App
