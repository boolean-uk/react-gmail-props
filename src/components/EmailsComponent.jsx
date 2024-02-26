
import PropTypes from 'prop-types'; // Import PropTypes
import EmailComponent from './EmailComponent';


export default function EmailsComponent(props) {
    EmailsComponent.propTypes = {
        emails: PropTypes.object.isRequired, 
        toggleRead: PropTypes.func.isRequired,
        toggleStar: PropTypes.func.isRequired
     };

const {emails, toggleRead, toggleStar} = props
  return (
    <main className="emails">
      <ul>
        {emails.map((email, index) => (     //Iterates over mails:
            // Calling single email component for each email.
          <EmailComponent
            // passing props
            key={index}
            email={email}
            toggleRead={toggleRead}
            toggleStar={toggleStar}
          />
        ))}
      </ul>
    </main>
  )
}
