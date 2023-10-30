
import React from 'react';
import Email from './Email';

function Emails({ emails, onToggleRead, onToggleStar }) {
  return (
    <ul>
      {emails.map((email, index) => (
        <Email
          key={index}
          email={email}
          onToggleRead={onToggleRead}
          onToggleStar={onToggleStar}
        />
      ))}
    </ul>
  );
}

export default Emails;
