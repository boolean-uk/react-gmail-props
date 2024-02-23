import React from "react";
import Email from "./Email";
import '../styles/Emails.css'

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