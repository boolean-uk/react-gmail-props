import { useEffect, useState } from 'react'

import initialEmails from '/src/data/emails'
import { ContentArea } from './ContentArea/ContentArea'
import '/src/styles/App.css'
import { Header } from './Header'
import { LeftMenu } from './LeftMenu'

const getSearchedEmails = (emails, search) => {
  return emails.filter((email) => {
    const emailAttributes = Object.values(email).join(" ").toLowerCase();
    return emailAttributes.includes(search.toLowerCase());
  })
}
const getReadEmails = emails => emails.filter(email => !email.read)
const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [filteredEmails, setFilteredEmails] = useState(emails);
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [openEmail, setOpenEmail] = useState(-1)
  const [search, setSearch] = useState("")

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
  useEffect(() => {
    setOpenEmail(-1);
  }, [currentTab]);

  useEffect(() => {
    let updatedFilteredEmails = emails;

    if (openEmail === -1)
      updatedFilteredEmails = getSearchedEmails(emails, search)
  
    if (hideRead)
      updatedFilteredEmails = getReadEmails(updatedFilteredEmails);

    if (currentTab === 'starred')
      updatedFilteredEmails = getStarredEmails(updatedFilteredEmails);
  
    setFilteredEmails(updatedFilteredEmails);
  }, [hideRead, currentTab, emails, openEmail, search]);
  

  return (
    <div className="app">
      <Header setSearch={setSearch}/>

      <LeftMenu
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
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
