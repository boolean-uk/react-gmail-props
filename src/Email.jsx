import PropTypes from 'prop-types';
import './styles/App.css'

 function Email(props) {
  Email.propTypes = {
    email: PropTypes.shape({
        read: PropTypes.bool,
        starred: PropTypes.bool,
        sender: PropTypes.string,
        title: PropTypes.string
    }),
    index: PropTypes.number,
    toggleRead: PropTypes.func,
    toggleStar: PropTypes.func
}

const {email, index, toggleRead, toggleStar} = props

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
      <div className="sender">{email.sender}</div>
      <div className="title">{email.title}</div>
    </li>
  )
}

export default Email