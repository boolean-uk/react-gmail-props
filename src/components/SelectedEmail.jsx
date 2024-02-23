import PropTypes from 'prop-types';
import '../styles/SelectedEmail.css';
export default function SelectedEmail({ email, onClick }) {
    return (
        <div className="selected-email">
            <button className="back-button" onClick={onClick}>BACK</button>
            <div className='email-content'>
                <h1>{email.title}</h1>
                <h3><i>Sent by:</i> <b>{email.sender}</b></h3>
                <p>{email.content ?? "No message body"}</p>
            </div>
        </div>
    )
}

SelectedEmail.propTypes = {
    email: PropTypes.shape({
        sender: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};
