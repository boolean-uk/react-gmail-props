import Email from '../email/Email.jsx'

function Emails(props) {
    return(
      <main className="emails">
      <ul>
        {props.filteredEmails.map((email, index) => (
          <Email 
            email={email} 
            index={index} 
            toggleRead={props.toggleRead} 
            toggleStar={props.toggleStar} 
            setSelectedEmail={props.setSelectedEmail}
          />
        ))}
      </ul>
      </main>
    )
}

export default Emails;