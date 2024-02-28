import PropTypes from 'prop-types'

function Email(props) {

  return (
    <li
    onClick={() => props.setShowOpenMail(true)}
    key={props.index}
    className={`email ${props.email.read ? 'read' : 'unread'}`}
  >
    <div className="select">
      <input
        className="select-checkbox"
        type="checkbox"
        checked={props.email.read}
        onChange={() => props.toggleRead(props.email)}
      />
    </div>
    <div className="star">
      <input
        className="star-checkbox"
        type="checkbox"
        checked={props.email.starred}
        onChange={() => props.toggleStar(props.email)}
      />
    </div>
    <div className="sender">{props.email.sender}</div>
    <div className="title">{props.email.title}</div>
  </li>
  )
}

Email.propTypes = {
    index: PropTypes.number,
    email: PropTypes.object,
    toggleRead: PropTypes.func,
    toggleStar: PropTypes.func,
    setShowOpenMail: PropTypes.func
}

export default Email