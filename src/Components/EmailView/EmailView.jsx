import PropTypes from 'prop-types';
import "./EmailView.css"
import EmailTools from "./EmailTools/EmailTools.jsx"
import EmailHeader from "./EmailHeader/EmailHeader.jsx"
import EmailBody from "./EmailBody/EmailBody.jsx"

const EmailView = ({email, setTarget, emailCount, setEmails, showDetails}) => {
    return (
        <>
        <article>
            <EmailTools 
                currentTargetId={email.id} 
                setTarget={setTarget} 
                email={email}
                setEmails={setEmails}
                emailCount={emailCount}
                showDetails={showDetails}
            />
            <EmailHeader email={email}/>
            <EmailBody email={email}/>
        </article>
        </>
    )
}

EmailView.propTypes = {
    email: PropTypes.object,
    setTarget: PropTypes.func,
    emailCount: PropTypes.number,
    setEmails: PropTypes.func,
    showDetails: PropTypes.func,
}

export default EmailView