import PropTypes from 'prop-types';
import "./EmailView.css"
import EmailTools from "./EmailTools/EmailTools.jsx"
import EmailHeader from "./EmailHeader/EmailHeader.jsx"
import EmailBody from "./EmailBody/EmailBody.jsx"

const EmailExpanded = ({email, setTarget, emailCount, setEmails, updateEmail, showDetails}) => {
    console.log(email)
    return (
        <>
        <article>
            <EmailTools 
                currentTargetId={email.id} 
                setTarget={setTarget} 
                email={email}
                setEmails={setEmails}
                updateEmail={updateEmail}
                emailCount={emailCount}
                showDetails={showDetails}
            />
            <EmailHeader email={email}/>
            <EmailBody email={email}/>
        </article>
        </>
    )
}

EmailExpanded.propTypes = {
    email: PropTypes.object,
    setTarget: PropTypes.func,
    emailCount: PropTypes.number,
    updateEmail: PropTypes.func,
    setEmails: PropTypes.func,
    showDetails: PropTypes.func,
}

export default EmailExpanded