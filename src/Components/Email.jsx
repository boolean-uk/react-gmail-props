import PropTypes from "prop-types";

export default function Email({ email, toggleRead, toggleStar, onClick }) {
    
    return (
        <li className={`email ${email.read ? "read" : "unread"}`} onClick={onClick}>
            <div className="select">
                <input
                    className="select-checkbox"
                    type="checkbox"
                    checked={email.read}
                    onChange={(e) => {
                        e.stopPropagation();
                        toggleRead(email);
                    }}
                />
            </div>
            <div className="star">
                <input
                    className="star-checkbox"
                    type="checkbox"
                    checked={email.starred}
                    onChange={(e) => {
                        e.stopPropagation();
                        toggleStar(email);
                    }}
                />
            </div>
            <div className="sender">{email.sender}</div>
            <div className="title">{email.title}</div>
        </li>
    );
}

Email.propTypes = {
    email: PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        read: PropTypes.bool.isRequired,
        starred: PropTypes.bool.isRequired,
    }).isRequired,
    toggleRead: PropTypes.func.isRequired,
    toggleStar: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
};
