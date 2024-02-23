import React from 'react';
import Email from './Email';

const Emails = ({filteredEmails, toggleStar, toggleRead}) => {
    return (
        <main className="emails">
            <ul>
                {filteredEmails.map((email, index) => (
                    <Email 
                        key={index} 
                        email={email} 
                        toggleRead={toggleRead}
                        toggleStar={toggleStar}
                        />
                ))}
            </ul>
        </main>
    );
}

export default Emails;
