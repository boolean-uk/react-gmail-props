import React from 'react';
import './Emails.css';
import Email from './Email/Email';

function Emails(props) {
  const filteredEmails = props.filteredEmails.filter(email =>
    email.title.toLowerCase().includes(props.searchQuery.toLowerCase())
  );

  return (
    <main className="emails">
      <ul>
        {filteredEmails.map((email, index) => (
          <Email
            key={index}
            index={index}
            email={email}
            setEmails={props.setEmails}
            setSelectedEmail={props.setSelectedEmail} 
          />
        ))}
      </ul>
    </main>
  );
}

export default Emails;
