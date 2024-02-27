
function Emails(props){
    let filteredEmails = props.emails

    if (props.hideRead) filteredEmails = props.getReadEmails(filteredEmails)

    if (props.currentTab === 'starred')
        filteredEmails = props.getStarredEmails(filteredEmails)

    const toggleStar = targetEmail => {
        const updatedEmails = emails =>
          emails.map(email =>
            email.id === targetEmail.id
              ? { ...email, starred: !email.starred }
              : email
          )
        props.setEmails(updatedEmails)
      }
    
      const toggleRead = targetEmail => {
        const updatedEmails = emails =>
          emails.map(email =>
            email.id === targetEmail.id ? { ...email, read: !email.read } : email
          )
        props.setEmails(updatedEmails)
      }

    return(
        <main className="emails">
        <ul>
          {filteredEmails.map((email, index) => (
            <li
              key={index}
              className={`email ${email.read ? 'read' : 'unread'}`}
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
          ))}
        </ul>
        </main>
    )
}
export default Emails