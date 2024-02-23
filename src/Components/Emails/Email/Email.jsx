import PropTypes from 'prop-types';
import "./Email.css"

const Email = ({email, setEmails, setTarget, showDetails}) => {
    const toggleStar = targetEmail => {
        const updatedEmails = emails =>
            emails.map(email =>
            email.id === targetEmail.id
            ? { ...email, starred: !email.starred }
            : email
        )
        setEmails(updatedEmails)
    }

    const toggleRead = targetEmail => {
        const updatedEmails = emails =>
            emails.map(email =>
            email.id === targetEmail.id ? { ...email, read: !email.read } : email
        )
        setEmails(updatedEmails)
    }

    const ShowEmailDetails = () => {
        setTarget(email.id - 1)
        showDetails(true)
      }

    return (
        <>
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
            <div className="sender" onClick={() => ShowEmailDetails()}>{email.sender}</div>
            <div className="title" onClick={() => ShowEmailDetails()}>{email.title}</div>
        </>
    )
}

Email.propTypes = {
    key: PropTypes.number,
    email: PropTypes.object,
    setEmails: PropTypes.func,
    setTarget: PropTypes.func,
    showDetails: PropTypes.func,
}

export default Email