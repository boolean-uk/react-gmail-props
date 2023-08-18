import '../styles/emails.css'

import Email from "./Email";

function Emails(props) {
    return (
        <ul>
          {props.filteredEmails.map((email, index) => (
            <Email key={index} email={email} index={index} toggleRead={props.toggleRead} toggleStar={props.toggleStar} openEmail={props.openEmail}/>
          ))}
        </ul>
    );
}

export default Emails