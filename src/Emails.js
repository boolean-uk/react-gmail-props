//You should have an Emails component that renders a list assesment
import Email from './Email.js'

function Emails({ emails, toggleRead, toggleStar, onSelectEmail }) {
  return (
    <ul>
      {emails.map(email => (
        <Email key={email.id}
        email={email}
        toggleRead={toggleRead}
        toggleStar={toggleStar} 
        onClick={() => onSelectEmail(email)}  /* onClick added here */
        />
      ))}
    </ul>
  )
}

export default Emails