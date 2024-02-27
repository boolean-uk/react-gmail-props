import { useState } from 'react';
import EmailHeader from './emailContentComps/EmailHeader'
import EmailBody from './emailContentComps/EmailBody'
import EmailActions from './emailContentComps/EmailActions'
import EmailTitle from './emailContentComps/EmailTitle'
import EmailReply from './emailContentComps/EmailReply'
import PropTypes from 'prop-types'

function EmailContent( {email} ) {
    const [showReply, setShowReply] = useState(false)

    console.log(email)

    const toggleReply = () => {
        setShowReply(!showReply)
    };

    return (
        <article className="email-content">
            <EmailTitle 
            title = {email.title}
            />
            {<EmailHeader 
            sender = {email.sender}
            address = {email.address}
            /> }
            <EmailBody 
            body = {email.body}/>
            <EmailActions toggleReply={toggleReply} />
            {showReply && <EmailReply />}
        </article>
    );
}

EmailContent.propTypes = {
    email: PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        starred: PropTypes.bool.isRequired,
        read: PropTypes.bool.isRequired
    }).isRequired
  }
export default EmailContent