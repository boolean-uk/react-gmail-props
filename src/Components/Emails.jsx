import React from 'react';
import { useState } from 'react';
import Email from './Email';
import '../styles/Emails.css';
import OpenEmail from './OpenEmail';

const Emails = ({filteredEmails, toggleStar, toggleRead}) => {

    const [selectedEmail, setSelectedEmail] = useState(null)

    const handleSelectEmail = (email) => {
        setSelectedEmail(email)
    }

    const isSelected = (email) => {
        if(selectedEmail === email) {
            return true
        }
        return false;
    }
    
    return (
        <main className="emails">
            {selectedEmail === null ? 
            ( <ul>
                {filteredEmails.map((email, index) => (
                    <Email 
                        key={index} 
                        email={email} 
                        toggleRead={toggleRead}
                        toggleStar={toggleStar}
                        onClick={() => handleSelectEmail(email)}
                        />
                ))}
            </ul>
            ) :
            <OpenEmail email={selectedEmail} onClick={()=> handleSelectEmail(null)}/> 
            }
           
        </main>
    );
}

export default Emails;
