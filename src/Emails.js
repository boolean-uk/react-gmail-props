import Email from "./Email"
import emails from './data/emails'

function Emails() {
  let filteredEmails = emails

console.log('read', getStarredEmails, getReadEmails)
  return (
    <main className="emails">
      <ul>
        {filteredEmails.map((email, index) => (
          <Email
            email={email}
            key={index}
            toggleStar={getStarredEmails}
            toggleRead={getReadEmails} />
        ))}
      </ul>
    </main>
  )
}
export default Emails