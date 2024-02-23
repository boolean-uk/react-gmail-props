import React from 'react'
import Email from './Email'

import './styles/Emails.css'

function Emails({filteredEmails, toggleRead, toggleStar, setCurrentTab, setCurrentEmail}) {

  return (
    <main className="emails">
        <ul>
        {filteredEmails.map((email, index) => (
            <Email email={email} index={index} toggleRead={toggleRead} toggleStar={toggleStar}
            setCurrentTab={setCurrentTab} setCurrentEmail={setCurrentEmail}/>
        ))}
        </ul>
    </main>
  )
}

export default Emails