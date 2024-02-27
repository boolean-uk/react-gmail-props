import PropTypes from 'prop-types';
import Email from './Email'

function Emails(props) {

  const toggleStar = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
      props.setEmails(updatedEmails)
  }

  const toggleRead = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
      props.setEmails(updatedEmails)
  }
    // page
    return(
        <main className="emails">
        <ul>
          {props.filteredEmails.map((email, index) => (
            <Email 
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

Emails.propTypes = {
  setEmails: PropTypes.func.isRequired,
  filteredEmails: PropTypes.array.isRequired,
  toggleStar: PropTypes.any.isRequired,
  toggleRead: PropTypes.any.isRequired

}

export default Emails