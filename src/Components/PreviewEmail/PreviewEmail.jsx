import React from 'react'
import { EmailActions } from './emailActions'
import { EmailBody } from './emailBody'
import { EmailToolbar } from './EmailToolbar'
import { ContentHeader } from './contentHeader'

function PreviewEmail({email, emails, currentEmail, setCurrentEmail}) {
  return (
    <main className='email-view'>
        <EmailToolbar emails={emails} currentEmail={currentEmail} setCurrentEmail={setCurrentEmail}/>

        <article className="email-content">
          <div className="title">
            <h1>{email.title}</h1>
          </div>

            <ContentHeader email={email}/>

            <EmailBody />

            <EmailActions />
        </article>
    </main>
  )
}

export default PreviewEmail