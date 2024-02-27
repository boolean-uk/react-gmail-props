import EmailDisplayComponent from "./Emails/EmailDisplay"
import EmailListItemComponent from "./Emails/EmailListItem"

function EmailsComponent({ setEmails, filteredEmails, selectedEmail, setSelectedEmail }) {
    if (selectedEmail !== undefined) {
        return (
            <EmailDisplayComponent email={selectedEmail} setSelectedEmail={setSelectedEmail} />
        )
    }

    return (
        <main className="emails">
            <ul>
                {filteredEmails.map((email, index) => (
                    <EmailListItemComponent
                        setEmails={setEmails}
                        email={email}
                        index={index}
                        setSelectedEmail={setSelectedEmail}
                    />
                ))}
            </ul>
        </main>
    )
}

export default EmailsComponent