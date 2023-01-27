import Email from './Email'
import './styles/emails.css'

function Emails(props) {

    return (
        <main className="emails">
        <ul>
          {props.filteredEmails.map((email, index) => (
            <Email 
            email={email} 
            key={index}
            toggleStar={props.toggleStar} 
            toggleRead={props.toggleRead} />
          ))}
        </ul>
      </main>
    )
}

export default Emails;