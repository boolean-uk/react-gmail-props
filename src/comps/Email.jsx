import PropTypes from 'prop-types'
import '../styles/Email.css'

function Email({ email, index, toggleRead, toggleStar, openMail }) {

  const handleEmailClick = () => {
    openMail(email.id) // Open the mail
    toggleRead(email) // Mark the email as read
  }

    return (
      <li
      key={index}
      className={`email ${email.read ? 'read' : 'unread'}`}
      >
        <div className="select">
          <input
            className="select-checkbox"
            type="checkbox"
            checked={email.read}
            onChange={() => toggleRead(email)}
          />
        </div>
        <div className="star">
          <input
            className="star-checkbox"
            type="checkbox"
            checked={email.starred}
            onChange={() => toggleStar(email)}
          />
        </div>
          {/* onclick on both since I suck at HTML/CSS */}
          <div className="sender email-text" onClick={handleEmailClick} >{email.sender}</div> 
          <div className="title email-text" onClick={handleEmailClick}>{email.title}</div>
      </li>
    )
}


Email.propTypes = {
    email: PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      starred: PropTypes.bool.isRequired,
      read: PropTypes.bool.isRequired
    }).isRequired,
    index: PropTypes.number.isRequired,
    toggleRead: PropTypes.func.isRequired,
    toggleStar: PropTypes.func.isRequired,
    openMail: PropTypes.func.isRequired
}

export default Email
