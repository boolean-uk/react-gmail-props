function Email({email, index, setEmails, showEmail, setShowEmail, setEmailBody}) {

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
        onClick={() => {
          setShowEmail(!showEmail)
          setEmailBody(email)
        }}
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

export default Email