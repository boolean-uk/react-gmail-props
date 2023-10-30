
import React, { useState } from 'react';
import Emails from './Emails';
import initialEmails from './data/emails';
import './styles/App.css';

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState('inbox');

  const getReadEmails = emails => emails.filter(email => !email.read);
  const getStarredEmails = emails => emails.filter(email => email.starred);

  const toggleStar = targetEmail => {
    const updatedEmails = emails.map(email =>
      email.id === targetEmail.id ? { ...email, starred: !email.starred } : email
    );
    setEmails(updatedEmails);
  };

  const toggleRead = targetEmail => {
    const updatedEmails = emails.map(email =>
      email.id === targetEmail.id ? { ...email, read: !email.read } : email
    );
    setEmails(updatedEmails);
  };

  let filteredEmails = emails;

  if (hideRead) filteredEmails = getReadEmails(filteredEmails);

  if (currentTab === 'starred') filteredEmails = getStarredEmails(filteredEmails);

  return (
    <div className="app">
      {/* Header and Search components can be added here if needed */}
      <nav className="left-menu">
        {/* Navigation component can be added here if needed */}
      </nav>
      <main className="emails">
        <Emails emails={filteredEmails} onToggleRead={toggleRead} onToggleStar={toggleStar} />
      </main>
    </div>
  );
}

export default App;
