

function Star(props) {
  const toggleStar = targetEmail => { //a function named toggleStar that takes targetEmail as param
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
    props.setEmails(updatedEmails)
  }

  return (
    <div className="star">
      <input
        className="star-checkbox"
        type="checkbox"
        checked={props.email.starred}
        onChange={() => toggleStar(props.email)}
      />
    </div>
  )
}

export default Star