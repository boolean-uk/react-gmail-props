import PropTypes from 'prop-types';
import EmailPreview from '../emailPreview';
import Email from '../email';
import './styles/index.css';
import { useState } from 'react';

const Emails = ({ emails, toggleRead, toggleStar }) => {
    const [showContent, setShowContent] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState(0);
    
    return (
    <main className="emails">
        <ul>
            {!showContent && emails.map((email, index) => (
                <EmailPreview onClick={() => {setSelectedEmail(index); setShowContent(true)}} setShowContent={setShowContent} key={index} email={email} toggleRead={toggleRead} toggleStar={toggleStar} />
            ))}
            {showContent && <Email email={emails[selectedEmail] || {}} setShowContent={setShowContent} />}
        </ul>
    </main>
  );
}

export default Emails;

Emails.propTypes = {
    emails: PropTypes.array,
    toggleRead: PropTypes.func,
    toggleStar: PropTypes.func
}