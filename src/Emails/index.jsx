import Email from '../Email'

function Emails(props) {
    const toggleRead = targetEmail => {
        const updatedEmails = emails =>
          emails.map(email =>
            email.id === targetEmail.id ? { ...email, read: !email.read } : email
          )
        props.setEmails(updatedEmails)
      }
    
    const toggleStar = targetEmail => {
        const updatedEmails = emails =>
            emails.map(email =>
            email.id === targetEmail.id
                ? { ...email, starred: !email.starred }
                : email
            )
        props.setEmails(updatedEmails)
    }

    return (
        <main className="emails">
        <ul>
          {props.filteredEmails.map((email, index) => (
            <Email 
                key={index}
                index={index}
                email={email}
                toggleRead={toggleRead}
                toggleStar={toggleStar}
                setOpenEmail={props.setOpenEmail}
            />
          ))}
        </ul>
      </main>
    )
}

export default Emails