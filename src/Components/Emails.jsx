import { useState } from "react";
import Email from "./Email";
/* eslint react/prop-types:0 */
/* eslint no-unused-vars:0 */
 
export default function Emails({ emails, setEmails, setSelectedEmail }) {
    return (
        <main className="emails">
            <ul>
                
                {emails.map((email, index) => (
                    <Email
                        key={index}
                        email={email}
                        index={index}
                        setEmails={setEmails}
                        onClick={() => { setSelectedEmail(email) }} //placeholder
                    />
                ))}
            </ul>
        </main>
    )
}