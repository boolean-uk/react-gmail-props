import React from 'react'
import Emails from './Emails'

function MainComponent({filteredEmails, setEmails}) {
    
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
  return (
    <>
        <main className='emails'>
            <Emails filteredEmails={filteredEmails} toggleRead={toggleRead} toggleStar={toggleStar}/>
        </main>
    </>
  )
}

export default MainComponent