import PropTypes from 'prop-types';

const EmailHeader = ({email}) => {

    // This would be contained wihtin an actual email
    const emailSendDate = new Date().toLocaleString()
    return (
        <>
        <div className="email-title">
            <h1>{email.title}</h1>
        </div>
        <header className="email-content--header">
            <div className="avatar"/>
            <div className="email-info">
                <div className="sender-info">
                    <h2>{email.sender}</h2>
                    <em>&lt;{email.sender}@email.com&gt;</em>
                </div>
            </div>
            <div className="date-info">
                <p>{emailSendDate}</p>
            </div>
        </header>
        </>
    )
}

EmailHeader.propTypes = {
    email: PropTypes.object
}

export default EmailHeader