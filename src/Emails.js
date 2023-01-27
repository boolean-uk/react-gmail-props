import './styles/Emails.css'
import Email from './Email'

const getReadEmails = emails => emails.filter(email => !email.read)
const getStarredEmails = emails => emails.filter(email => email.starred)

const Emails = ({emails, setEmails, hideRead, currentTab}) => {

    let filteredEmails = emails
    if (hideRead) filteredEmails = getReadEmails(filteredEmails)
    if (currentTab === 'starred') filteredEmails = getStarredEmails(filteredEmails)

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
        <main className="emails">
        <ul>
            {filteredEmails.map((email, index) => (
                <Email 
                    email={email} 
                    key={index}
                    toggleStar={toggleStar}
                    toggleRead={toggleRead}
                />
            ))}
        </ul>
        </main>
    )
}

export default Emails