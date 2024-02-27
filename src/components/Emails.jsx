import React, { useState } from 'react'
import Email from './Email'
import OpenEmail from './OpenEmail'

function Emails({filteredEmails, toggleStar, toggleRead, toggleOpenMail}) {
    const [emailData, setEmailData] = useState()
  return (
    <>
        {emailData ? <OpenEmail email={emailData} setEmailData={setEmailData}/>:
        <ul>
        {filteredEmails.map((email, index) => (
            <Email key={index} email={email} toggleStar={toggleStar} toggleRead={toggleRead} toggleOpenMail={toggleOpenMail} setEmailData={setEmailData}/>
        ))}
        </ul>}
    </>
  )
}

export default Emails