import EmailContent from "./EmailContent";
import EmailToolbar from "./EmailToolbar";

function ViewEmail(props) {
  return (
    <main className="email-view">
      <EmailToolbar setActiveEmail={props.setActiveEmail} />
      <EmailContent title={props.activeEmail.title} />
    </main>
  );
}

export default ViewEmail;
