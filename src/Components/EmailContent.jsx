import PropTypes from 'prop-types';

export default function EmailContent({ email, onBackClick }) {
    console.log(email);
    return (
        <div className="email-content">
            <div className="email-header">
                <h2>{email.title}</h2>
            </div>
            <div className="email-details">
                <div className="email-sender">
                    <span>From:</span>
                    <span>{email.sender}</span>
                </div>
                <div className="email-date">
                    <span>Date:</span>
                    <span>April 28, 2021</span>
                </div>
            </div>
            <div className="email-body">
                <p>{email.content}</p>
            </div>
            <button onClick={onBackClick}>Back</button>
        </div>
    )
}

EmailContent.propTypes = {
    email: PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        read: PropTypes.bool.isRequired,
        starred: PropTypes.bool.isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired,
    onBackClick: PropTypes.func.isRequired,
}