import React, { useState } from 'react';
import Email from '../Email/Email';
import '../Emails/Emails.css';

const Emails = ({ emails = [], hideRead, currentTab, setEmails }) => {
  const [searchTerm, setSearchTerm] = useState(''); 

  const getReadEmails = (emails) => emails.filter((email) => !email.read);
  const getStarredEmails = (emails) => emails.filter((email) => email.starred);

  // Ensure that 'emails' is defined and is an array before filtering
  let filteredEmails = emails && Array.isArray(emails) ? emails : [];

  if (hideRead) filteredEmails = getReadEmails(filteredEmails);

  if (currentTab === 'starred') filteredEmails = getStarredEmails(filteredEmails);

  // Filter emails based on the search term
  if (searchTerm) {
    filteredEmails = filteredEmails.filter(
      (email) => email.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const toggleStar = (targetEmail) => {
    const updatedEmails = filteredEmails.map((email) =>
      email.id === targetEmail.id ? { ...email, starred: !email.starred } : email
    );
    setEmails(updatedEmails);
  };

  const toggleRead = (targetEmail) => {
    const updatedEmails = filteredEmails.map((email) =>
      email.id === targetEmail.id ? { ...email, read: !email.read } : email
    );
    setEmails(updatedEmails);
  };

  return (
    <main className="emails">
      <header>
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>
      <ul>
        {filteredEmails.map((email, index) => (
          <Email
            email={email}
            index={index}
            toggleRead={toggleRead}
            toggleStar={toggleStar}
            key={email.id}
          />
        ))}
      </ul>
    </main>
  );
};

export default Emails;