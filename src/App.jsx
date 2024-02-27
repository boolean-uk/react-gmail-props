import { useState } from 'react'
import initialEmails from './data/emails'
import './styles/App.css'
import HeaderComponent from './Header'
import LeftMenuComponent from './LeftMenu'
import EmailReaderComponent from './Emails'
import EmailDetail from './EmailDetail'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [selectedEmail, setSelectedEmail] = useState(null)
  const [showDetail, setShowDetail] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  const handleSearch = (query) => {
    setSearchQuery(query)


    if(query.trim() !== '') {
      
    }
    if (query === '') {
      setEmails(initialEmails)
      return
    }

    const filteredEmails = emails.filter((email) => email.sender.toLowerCase().includes(searchQuery) ||
    email.title.toLowerCase().includes(query))

    setEmails(filteredEmails)
    
                                                  
  }


  const handleEmailClick = (email) => {
    setSelectedEmail(email)
    setShowDetail(true)
  }

  const handleBack = () => {
    setShowDetail(false)
    setSelectedEmail(null)
  }

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

  return (
    <div className="app">
      <HeaderComponent
      handleSearch={handleSearch}/>
      <LeftMenuComponent
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      unreadEmails={unreadEmails}
      starredEmails={starredEmails}
      hideRead={hideRead}
      setHideRead={setHideRead}
      />
      {showDetail ? (<EmailDetail
            selectedEmail={selectedEmail}
            handleBack={handleBack}/>
      ) : (
            
          <EmailReaderComponent
          filteredEmails={filteredEmails}
          toggleStar={toggleStar}
          toggleRead={toggleRead}
          handleEmailClick={handleEmailClick}
          />
          )}
    </div>
  )
}

export default App
