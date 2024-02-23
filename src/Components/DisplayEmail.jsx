import PropTypes from 'prop-types';


export default function DisplayEmail({ email, onClick }) {
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

DisplayEmail.propTypes = {
    email: PropTypes.shape({
        sender: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};