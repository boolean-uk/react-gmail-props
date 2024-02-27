import PropTypes from 'prop-types';
import Email from "./Email";

export default function EmailList({ setEmails, filteredEmails, setSelectedEmail }) {
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

  return (
    <main className="emails">
      <ul>
        {filteredEmails.map((email, index) => (
          <Email 
            key={index} 
            email={email} 
            toggleRead={toggleRead} 
            toggleStar={toggleStar}
            setSelectedEmail={setSelectedEmail} />
        ))}
      </ul>
    </main>
  )
}

EmailList.propTypes = {
  filteredEmails: PropTypes.array.isRequired,
  setEmails: PropTypes.func.isRequired,
  setSelectedEmail: PropTypes.func.isRequired
};