import PropTypes from 'prop-types'

export function EmailDetail({ email, setSelectedEmail }) {
    return (
        <div className="email-detail">
            <div className="email-detail-header">
                <h2>{email.title}</h2>
                <button onClick={() => setSelectedEmail(null)}>Back</button>
            </div>
            <p>From: {email.sender}</p>
            <p>Email body blalalasdfhøa...</p>
        </div>
    );
}

EmailDetail.propTypes = {
    email: PropTypes.shape({
        read: PropTypes.bool.isRequired,
        starred: PropTypes.bool.isRequired,
        sender: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    setSelectedEmail: PropTypes.func.isRequired
};

function Email({ email, onToggleRead, onToggleStar, setSelectedEmail }) {
    return (
        <li className={`email ${email.read ? 'read' : 'unread'}`}
        >
            <div className="select">
                <input
                    className="select-checkbox"
                    type="checkbox"
                    checked={email.read}
                    onChange={() => onToggleRead(email)}
                />
            </div>
            <div className="star">
                <input
                    className="star-checkbox"
                    type="checkbox"
                    checked={email.starred}
                    onChange={() => onToggleStar(email)}
                />
            </div>
            <div className="sender" onClick={() => setSelectedEmail(email)}>{email.sender}</div>
            <div className="title" onClick={() => setSelectedEmail(email)}>{email.title}</div>
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
    onToggleRead: PropTypes.func.isRequired,
    onToggleStar: PropTypes.func.isRequired,
    setSelectedEmail: PropTypes.func.isRequired
}


export default function Emails({ emails, toggleRead, toggleStar, setSelectedEmail }) {
    return (
        <main className="emails">
            <ul>
                {emails.map((email, index) => (
                    <Email
                        key={index}
                        email={email}
                        onToggleRead={toggleRead}
                        onToggleStar={toggleStar}
                        setSelectedEmail={setSelectedEmail}

                    />
                ))}
            </ul>
        </main>
    )
}

Emails.propTypes = {
    emails: PropTypes.arrayOf(PropTypes.shape({
        read: PropTypes.bool.isRequired,
        starred: PropTypes.bool.isRequired,
        sender: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    })).isRequired,
    toggleRead: PropTypes.func.isRequired,
    toggleStar: PropTypes.func.isRequired,
    setSelectedEmail: PropTypes.func.isRequired
}