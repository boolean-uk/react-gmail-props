import { useState } from 'react';
import EmailHeader from './emailContentComps/EmailHeader'
import EmailBody from './emailContentComps/EmailBody'
import EmailActions from './emailContentComps/EmailActions'
import EmailTitle from './emailContentComps/EmailTitle'
import EmailReply from './emailContentComps/EmailReply'

function EmailContent() {
    const [showReply, setShowReply] = useState(false)

    const toggleReply = () => {
        setShowReply(!showReply)
    };

    return (
        <article className="email-content">
            <EmailTitle />
            <EmailHeader />
            <EmailBody />
            <EmailActions toggleReply={toggleReply} />
            {showReply && <EmailReply />}
        </article>
    );
}

export default EmailContent