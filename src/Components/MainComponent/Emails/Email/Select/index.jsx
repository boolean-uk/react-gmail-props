
function Select(props) {
  const toggleRead = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    props.setEmails(updatedEmails)
  }

  return (
    <div className="select">
      <input
        className="select-checkbox"
        type="checkbox"
        checked={props.email.read}
        onChange={() => toggleRead(props.email)}
      />
    </div>
  )
}

export default Select