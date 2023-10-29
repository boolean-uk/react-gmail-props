import '../styles/emails.css'

import Email from './email'

function Emails({ emails, toggleRead, toggleStar, hideRead, currentTab }) {

  const getReadEmails = emails => emails.filter(email => !email.read)
  const getStarredEmails = emails => emails.filter(email => email.starred)

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  return (
    <>
      <main className='emails'>
        <ul>
          {filteredEmails.map((email, index) => (
            <Email
            key={index}
            toggleRead={toggleRead}
            toggleStar={toggleStar}
            email={email}
            />
          ))}
          </ul>
      </main>
    </>
  )
  }

export default Emails

