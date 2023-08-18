//You should have an Emails component that renders a list
import Email from './Email.js'

function Emails({ emails, toggleRead, toggleStar }) {
  return (
    <ul>
      {emails.map(email => (
        <Email key={email.id} email={email} toggleRead={toggleRead} toggleStar={toggleStar} />
      ))}
    </ul>
  )
}

export default Emails