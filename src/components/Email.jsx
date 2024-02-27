import PropTypes from 'prop-types';

export default function Email({ email, toggleRead, toggleStar, setSelectedEmail }) {
  return (
    <li
      className={`email ${email.read ? 'read' : 'unread'}`}
    >
      <div className='email-buttons'>
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
      </div>
      <div onClick={() => setSelectedEmail(email)} className='email-listing-info'>
        <div className="sender">{email.sender}</div>
        <div className="title">{email.title}</div>
      </div>
    </li>
  )
}

Email.propTypes = {
  email: PropTypes.object.isRequired,
  toggleRead: PropTypes.func.isRequired,
  toggleStar: PropTypes.func.isRequired,
  setSelectedEmail: PropTypes.func.isRequired
};