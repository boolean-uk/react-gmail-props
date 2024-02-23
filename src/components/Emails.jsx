import '../styles/Email.css'
import PropTypes from 'prop-types'
import Email from './Email';

export default function Emails(props){

    const {filteredEmails, toggleRead, toggleStar } = props

    return <main className="emails">
    <ul>
      {filteredEmails.map((email, index) => (
        <Email key={index} email={email} index={index} toggleRead={toggleRead} toggleStar={toggleStar} /> 
      ))}
    </ul>
  </main>
}

Emails.propTypes = {
    filteredEmails: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        read: PropTypes.bool.isRequired,
        starred: PropTypes.bool.isRequired,
        sender: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
    toggleRead: PropTypes.func.isRequired,
    toggleStar: PropTypes.func.isRequired
  };