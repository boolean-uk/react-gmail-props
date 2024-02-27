import PropTypes from 'prop-types'
function Email(props){
    const {email, toggleRead, toggleStar} = props
    return (
        <li className={`email ${email.read ? 'read' : 'unread'}`}>
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
Email.propTypes = {
    email: PropTypes.arrayOf(PropTypes.object),
    toggleRead: PropTypes.func,
    toggleStar: PropTypes.func
}

export default Email