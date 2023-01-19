import Email from "./Email";
import "./styles/emails.css"




function Emails (props) {
   
return(
    <main className="emails">
    <ul>
    {props.filteredEmails.map((email, index) => (
        <li
          key={index}
          className={`email ${email.read ? 'read' : 'unread'}`}
          >

         <Email email={email} />

        </li>
     ))}
    </ul>
    </main>
)
    

}

export default Emails;