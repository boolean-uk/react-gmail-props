import { useState } from 'react'

import initialEmails from './data/emails'
import { ContentArea } from './ContentArea/ContentArea'
import './styles/App.css'
import { Header } from './Header'
import { LeftMenu } from './LeftMenu'


const getReadEmails = emails => emails.filter(email => !email.read)
const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [openEmail, setOpenEmail] = useState(-1)

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

  // Selecting a tab closes the oppen email-content
  const selectTab = (tabName) => {
    setOpenEmail(-1);
    setCurrentTab(tabName)
  }

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  return (
    <div className="app">
      <Header />

      <LeftMenu
        currentTab={currentTab}
        selectTab={selectTab}
        unreadEmails={unreadEmails}
        starredEmails={starredEmails}
        hideRead={hideRead}
        setHideRead={setHideRead}
      />

      <ContentArea
        filteredEmails={filteredEmails}
        toggleRead={toggleRead}
        toggleStar={toggleStar}
        openEmail={openEmail}
        setOpenEmail={setOpenEmail}
      />
    </div>
  );
}

export default App
