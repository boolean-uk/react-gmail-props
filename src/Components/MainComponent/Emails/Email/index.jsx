
function Email(props) {
    
    /**The reason you don't explicitly use props to access emails is that the setEmails function, when used with functional updates, 
     * automatically provides the latest state as an argument to the updating function.  
     * */

    const toggleStar = targetEmail => { //a function named toggleStar that takes targetEmail as param
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


    return (
        <li
            key={props.index} //ge varje li element ett indexnummer
            className={`email ${props.email.read ? 'read' : 'unread'}`} //email.read=true --> "email read" annars "email unread"
          >
            <div className="select">
              <input
                className="select-checkbox"
                type="checkbox"
                checked={props.email.read}
                onChange={() => toggleRead(props.email)}
              />
            </div>

            <div className="star">
              <input
                className="star-checkbox"
                type="checkbox"
                checked={props.email.starred}
                onChange={() => toggleStar(props.email)}
              />
            </div>

            <div className="sender">{props.email.sender}</div>
            <div className="title">{props.email.title}</div>
          </li>
    )
}

export default Email