export default function Email(item, index, emailState, setEmails) {
  const toggleStar = targetEmail => {
    const updatedEmails = emailState =>
      emailState.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
      setEmails(updatedEmails)
  }

  const toggleRead = targetEmail => {
    const updatedEmails = emailState =>
      emailState.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    setEmails(updatedEmails)
  }

  return (
    <li
      key={index}
      className={`email ${item.read ? 'read' : 'unread'}`}
    >
      <div className="select">
        <input
          className="select-checkbox"
          type="checkbox"
          checked={item.email.read}
          onChange={() => toggleRead(item)}
        />
      </div>
      <div className="star">
        <input
          className="star-checkbox"
          type="checkbox"
          checked={item.email.starred}
          onChange={() => toggleStar(item)}
        />
      </div>
      <div className="sender">{item.email.sender}</div>
      <div className="title">{item.email.title}</div>
    </li>
  )
}