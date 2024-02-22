import PropTypes from 'prop-types';
import '../styles/Email.css'
function Email({ setSelectedEmail, email, index, toggleRead, toggleStar }) {
    
    return (
        <li
            key={index}
            className={`email ${email.read ? 'read' : 'unread'}`}
            onClick={() => setSelectedEmail(email)}
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

Email.propTypes = {
    email: PropTypes.shape({
        read: PropTypes.bool.isRequired,
        starred: PropTypes.bool.isRequired,
        sender: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    toggleRead: PropTypes.func.isRequired,
    toggleStar: PropTypes.func.isRequired,
    setSelectedEmail: PropTypes.func.isRequired,
};

export default Email