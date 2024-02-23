/* eslint-disable react/prop-types */
import './Emails.css'
import Email from "./Email/Email"

function Emails(props) {
  return (
    <main className="emails">
    <ul>
      {props.filteredEmails.length !== 0 && props.filteredEmails.map((email, index) => (
        <Email 
            key={index} 
            index={index} 
            email={email} 
            setEmails={props.setEmails}
            setSelectedEmail={props.setSelectedEmail}
        />
      ))}
        {props.filteredEmails.length === 0 && 
          <h1>No results found</h1>
        }
    </ul>
  </main>
  )
}

export default Emails
