import { useState } from 'react'

import initialEmails from './data/emails'
import Emails from './components/Emails/Emails';
import SelectedEmail from './components/Emails/Email/EmailDetails'
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

import './styles/App.css';

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState('inbox');
  const [selectedEmail, setSelectedEmail] = useState(null); // State to track the selected email
  const [searchQuery, setSearchQuery] = useState(''); // State to track the search query

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)


  const handleEmailClick = email => {
    setSelectedEmail(email);
  };

  const handleBackToInbox = () => {
    setSelectedEmail(null);
  };

  const handleSearchQueryChange = event => {
    setSearchQuery(event.target.value);
  };

  // Filter emails based on search query
  const searchedEmails = emails.filter(email =>
    email.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  let filteredEmails = emails;

  if (hideRead) filteredEmails = getReadEmails(filteredEmails);

  if (currentTab === 'starred') filteredEmails = getStarredEmails(filteredEmails);

  return (
    <div className="app">
      <Header onSearchQueryChange={handleSearchQueryChange} /> {/* Pass the function to handle search query change */}
      <Nav 
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        unreadEmails={unreadEmails}
        starredEmails={starredEmails}
        hideRead={hideRead}
        setHideRead={setHideRead}
      />
      
      {selectedEmail=== null &&
        <Emails
          filteredEmails={filteredEmails}
          setEmails={setEmails}
          setSelectedEmail={setSelectedEmail}
          searchQuery={searchQuery} // Pass searchQuery as prop
        />
      }

      {selectedEmail!== null &&
        <SelectedEmail
          email={selectedEmail}
          setSelectedEmail={setSelectedEmail}
        />
      }

    </div>
  );
}

export default App;
