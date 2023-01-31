import Email from "./Email"
import emails from './data/emails'

function Emails() {
  let filteredEmails = emails

  const getReadEmails = emails => emails.filter(email => !email.read)
  const getStarredEmails = emails => emails.filter(email => email.starred)

  return (
    <main className="emails">
      <ul>
        {filteredEmails.map((email, index) => (
          <Email
            email={email}
            key={index}
            toggleStar={getReadEmails}
            toggleRead={getReadEmails} />
        ))}
      </ul>
    </main>
  )
}
export default Emails