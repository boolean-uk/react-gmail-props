import './Emails.css'
import Email from "../Email/Email.jsx"
/* eslint-disable react/prop-types */
function Emails({ emails, setEmails, hideRead, currentTab, getReadEmails, getStarredEmails }) {

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

    let filteredEmails = emails

    if (hideRead) filteredEmails = getReadEmails(filteredEmails)

    if (currentTab === 'starred')
        filteredEmails = getStarredEmails(filteredEmails)

    return (
        <main className="emails">
            <ul>
                {filteredEmails.map((email) => (
                    <Email email={email}
                        toggleStar={toggleStar}
                        toggleRead={toggleRead}
                        key={email.id}
                    />
                ))}
            </ul>
        </main>

    )
}

export default Emails
