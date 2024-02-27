import React from 'react'
import Email from './Email'

function Emails({filteredEmails, toggleStar, toggleRead}) {
  return (
    <>
        <ul>
        {filteredEmails.map((email, index) => (
            <Email key={index} email={email} toggleStar={toggleStar} toggleRead={toggleRead}/>
        ))}
        </ul>
    </>
  )
}

export default Emails