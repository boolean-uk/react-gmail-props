// import React from 'react'
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import EmailComponent from './EmailComponent'

function EmailsComponent({filteredEmails, toggleStar, toggleRead, setCurrentTab}) {
  return (
    <ul>
        {filteredEmails.map((email, index) => (
            <EmailComponent key = {index} email = {email} index = {index} toggleRead={toggleRead} toggleStar={toggleStar} setCurrentTab = {setCurrentTab}/>
        ))}
    </ul>
  )
}

export default EmailsComponent