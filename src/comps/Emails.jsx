import PropTypes from 'prop-types'
import Email from './Email.jsx'
import '../styles/Emails.css'

function Emails({ emails, setEmails, hideRead, currentTab, openMail}) {
    let filteredEmails = emails
    const getReadEmails = emails => emails.filter(email => !email.read)
    const getStarredEmails = emails => emails.filter(email => email.starred)

    const toggleStar = targetEmail => {
        const updatedEmails = emails =>
          emails.map(email =>
            email.id === targetEmail.id
              ? { ...email, starred: !email.starred }
              : email
          )
        setEmails(updatedEmails)
      }
    
      const toggleRead = targetEmail => {
        const updatedEmails = emails =>
          emails.map(email =>
            email.id === targetEmail.id ? { ...email, read: !email.read } : email
          )
        setEmails(updatedEmails)
      }

    if (hideRead) {
        filteredEmails = getReadEmails(filteredEmails)
    }

    if (currentTab === 'starred') {
        filteredEmails = getStarredEmails(filteredEmails)
    }

    return (
        <main className="emails">
        <ul>
          {filteredEmails.map((email, index) => (
            <Email 
                key={email.id}
                email={email}
                index={index}
                toggleRead={toggleRead}
                toggleStar={toggleStar}
                openMail={openMail}
            />
          ))}
        </ul>
        </main>
    )
}

Emails.propTypes = {
    emails: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      starred: PropTypes.bool.isRequired,
      read: PropTypes.bool.isRequired
    })).isRequired,
    setEmails: PropTypes.func.isRequired,
    hideRead: PropTypes.bool.isRequired,
    currentTab: PropTypes.string.isRequired,
    openMail: PropTypes.func.isRequired
}

export default Emails