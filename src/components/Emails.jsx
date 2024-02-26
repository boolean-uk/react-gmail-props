import Email from "./Email";

function Emails({ emails, setEmails, setSelectedEmail }) {
    return (
        <main className="emails">
            <ul>
                {emails.map((email, index) => (
                    <Email
                        key={index}
                        email={email}
                        index={index}
                        setEmails={setEmails}
                        onClick={() => { setSelectedEmail(email) }}
                    />
                ))}
            </ul>
        </main>
    )
}

export default Emails;