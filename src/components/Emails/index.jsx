import Email from "../Email";
import "./index.css";

function Emails(props) {
  return (
    <main className="emails">
      <ul>
        {props.filteredEmails.map((email, index) => (
          <Email email={email} key={index} setEmails={props.setEmails} />
        ))}
      </ul>
    </main>
  );
}

export default Emails;
