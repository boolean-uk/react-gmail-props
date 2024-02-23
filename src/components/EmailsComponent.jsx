// import React from 'react'
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import EmailComponent from './EmailComponent'

function EmailsComponent({filteredEmails, toggleStar, toggleRead}) {
  return (
    <ul>
        {filteredEmails.map((email, index) => (
            <EmailComponent key = {index} email = {email} index = {index} toggleRead={toggleRead} toggleStar={toggleStar}/>
        ))}
    </ul>
  )
}

export default EmailsComponent