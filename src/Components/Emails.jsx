/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react'
import Email from './Email'

import '../styles/Emails.css'

function Emails({filteredEmails, toggleRead, toggleStar}) {

  return (
    <main className="emails">
        <ul>
        {filteredEmails.map((email, index) => (
            <Email email={email} index={index} toggleRead={toggleRead} toggleStar={toggleStar}/>
        ))}
        </ul>
    </main>
  )
}

export default Emails