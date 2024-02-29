import '../styles/Email.css'
import PropTypes from "prop-types"
import EmailComponent from "./Email"

function EmailsComponent({ emails, setEmails, hideRead, currentTab }) {
    const toggleRead = targetEmail => {
      const updatedEmails = emails =>
        emails.map(email =>
          email.id === targetEmail.id ? { ...email, read: !email.read } : email
        )
      setEmails(updatedEmails)
    }
    const toggleStar = targetEmail => {
      const updatedEmails = emails =>
        emails.map(email =>
          email.id === targetEmail.id
            ? { ...email, starred: !email.starred }
            : email
        )
      setEmails(updatedEmails)
    }

    const getReadEmails = emails => emails.filter(email => !email.read)
    const getStarredEmails = emails => emails.filter(email => email.starred)
    
    let filteredEmails = emails
    if (hideRead) filteredEmails = getReadEmails(filteredEmails)
    if (currentTab === 'starred')
      filteredEmails = getStarredEmails(filteredEmails)

  return (
    <main className="emails">
    <ul>
      {filteredEmails.map((email, index) => (
        <EmailComponent key={index} index={index} email={email} toggleStar={toggleStar} toggleRead={toggleRead} /> 
      ))}
    </ul>
  </main>
  )
}

EmailsComponent.propTypes = {
    currentTab: PropTypes.string.isRequired,
    setEmails: PropTypes.func.isRequired,
    hideRead: PropTypes.bool.isRequired, 
    emails: PropTypes.array.isRequired,
};

export default EmailsComponent