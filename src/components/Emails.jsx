import Email from "./Email"
import "../styles/Emails.css"

const Emails = (props) => {
    return (
    <main className="emails">
        <ul>
        {props.filteredEmails.map((email, index) =>
           <Email email={email} index={index} toggleRead={props.toggleRead} toggleStar={props.toggleStar} />
        )}
        </ul>
    </main>
    )
}

export default Emails