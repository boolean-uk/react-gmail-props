/* eslint react/prop-types:0 */
/* eslint no-unused-vars:0 */

import { useState } from "react";


export default function Email({ email, index, setEmails, onClick }) {
    const toggleStar = targetEmail => {
        const updatedEmails = emails =>
            emails.map(email =>
                email.id === targetEmail.id
                    ? { ...email, starred: !email.starred }
                    : email
            )
        setEmails(updatedEmails)
    }

    const toggleRead = targetEmail => {
        const updatedEmails = emails =>
            emails.map(email =>
                email.id === targetEmail.id ? { ...email, read: !email.read } : email
            )
        setEmails(updatedEmails)
    }
    return (
        <li
            key={index}
            className={`email ${email.read ? 'read' : 'unread'}`}
            onClick={onClick}
        >
            <div className="select">
                <input
                    className="select-checkbox"
                    type="checkbox"
                    checked={email.read}
                    onChange={() => toggleRead(email)}
                />
            </div>
            <div className="star">
                <input
                    className="star-checkbox"
                    type="checkbox"
                    checked={email.starred}
                    onChange={() => toggleStar(email)}
                />
            </div>
            <div className="sender">{email.sender}</div>
            <div className="title">{email.title}</div>
        </li>
    )
}