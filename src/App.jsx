import { useState } from 'react'

import initialEmails from "./data/emails";

import './styles/App.css'
import Header from './Components/Header'
import Emails from './Components/Emails';
import LeftMenu from './Components/LeftMenu';

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");

  const [emails, setEmails] = useState(initialEmails)

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  return (
    <div className="app">
      <Header />

      <LeftMenu
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        hideRead={hideRead}
        setHideRead={setHideRead}
        filteredEmails={filteredEmails}
        unreadEmails={unreadEmails}
        starredEmails={starredEmails}
      />

      <Emails
        emails={emails}
        setEmails={setEmails}
        filteredEmails={filteredEmails}
      />
    </div>
  );
}

export default App
