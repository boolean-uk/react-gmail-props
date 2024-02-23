// import React from 'react'
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import EmailsComponent from './EmailsComponent'
import ReadingComponent from './ReadingComponent'

function MainComponent({filteredEmails, setEmails, currentTab, setCurrentTab}) {

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

  if(typeof currentTab === "string"){
    return (
      <main className="emails">
        <EmailsComponent filteredEmails = {filteredEmails} toggleStar = {toggleStar} toggleRead = {toggleRead} setCurrentTab = {setCurrentTab}/>    
      </main>
    )
  } else {
    return <main className="emails">
    <ReadingComponent currentTab = {currentTab} setCurrentTab = {setCurrentTab}/>
      </main>
  }
  
}

export default MainComponent