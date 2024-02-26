import PropTypes from 'prop-types';
import './styles/index.css';

const EmailPreview = ({ email, toggleRead, toggleStar, onClick: onClickAction }) => {
    return (
        <li onClick={onClickAction} className={`email ${email.read ? 'read' : 'unread'}`}>
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

export default EmailPreview;

EmailPreview.propTypes = {
    email: PropTypes.object,
    toggleRead: PropTypes.func,
    toggleStar: PropTypes.func,
    onClick: PropTypes.func
}