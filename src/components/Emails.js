import React from 'react'
import Email from './Email'

function Emails({ emails, toggleRead, toggleStar, openEmail }) {
  
  return (
    <ul className="email-list">
      {emails.map((email) => (
        <Email
          key={email.id}
          email={email}
          toggleRead={toggleRead}
          toggleStar={toggleStar}
          onClick={() => {openEmail(email.id)}}
        />
      ))}
    </ul>
  );
}

export default Emails;