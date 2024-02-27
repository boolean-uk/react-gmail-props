import './styles/App.css'
import MailComponent from "./Mail"
import React from 'react';

export default function EmailReaderComponent({filteredEmails, toggleStar, toggleRead, handleEmailClick}) {
    return <>
     <main className="emails">
        <ul>
     {filteredEmails.map((email, index) => (
           <MailComponent
           toggleRead={toggleRead}
           toggleStar={toggleStar}
           index={index}
           email={email}
           key={email.id}
           handleEmailClick={() => handleEmailClick(email)}
           />
          ))}
           </ul>
      </main>
          </>
}