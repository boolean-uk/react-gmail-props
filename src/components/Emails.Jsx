import Email from "./Email"
import "../styles/Emails.css"

const Emails = (props) => {
    const getReadEmails = emails => emails.filter(email => !email.read)
    const getStarredEmails = emails => emails.filter(email => email.starred)

    // eslint-disable-next-line react/prop-types
    let filteredEmails = props.emails

    // eslint-disable-next-line react/prop-types
    if (props.hideRead) filteredEmails = getReadEmails(filteredEmails)

    // eslint-disable-next-line react/prop-types
    if (props.currentTab === 'starred')
      filteredEmails = getStarredEmails(filteredEmails)


  const toggleStar = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
      // eslint-disable-next-line react/prop-types
      props.setEmails(updatedEmails)
  }

  const toggleRead = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
      // eslint-disable-next-line react/prop-types
      props.setEmails(updatedEmails)
  }

    return (
    <main className="emails">
        <ul>
        {filteredEmails.map((email, index) =>
           // eslint-disable-next-line react/jsx-key
           <Email email={email} index={index} toggleRead={toggleRead} toggleStar={toggleStar} />
        )}
        </ul>
    </main>
    )
}

export default Emails