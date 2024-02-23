// import React from 'react'
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import EmailsComponent from './EmailsComponent'

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
    <main className="emails">
      <EmailsComponent filteredEmails = {filteredEmails} toggleStar = {toggleStar} toggleRead = {toggleRead}/>    
    </main>
  )
}

export default MainComponent