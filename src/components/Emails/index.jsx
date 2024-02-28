import Email from "../Email";
import EmailView from "../RenderEmail/EmailView";
import "./index.css";

function Emails(props) {
  return (
    <main className="emails">
      {props.currentEmail === null && (
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
      )}
      {props.currentEmail !== null && (
        <EmailView
          setCurrentEmail={props.setCurrentEmail}
          currentEmail={props.currentEmail}
        />
      )}
    </main>
  );
}

export default Emails;
