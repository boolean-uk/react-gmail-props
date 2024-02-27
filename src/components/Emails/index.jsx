import Email from "../Email";
import EmailView from "../RenderEmail/EmailView";
import "./index.css";

function Emails(props) {
  if (props.currentEmail === null) {
    return (
      <main className="emails">
        <ul>
          {props.filteredEmails.map((email, index) => (
            <Email
              email={email}
              key={index}
              setEmails={props.setEmails}
              setCurrentEmail={props.setCurrentEmail}
            />
          ))}
        </ul>
      </main>
    );
  } else {
    return (
      <main className="emails">
        <EmailView setCurrentEmail = {props.setCurrentEmail} currentEmail = {props.currentEmail}/>
      </main>
    );
  }
}

export default Emails;
