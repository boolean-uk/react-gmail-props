import Email from "./Email.jsx";
import { useState } from "react";
import EmailContent from "./EmailContent.jsx";

function Emails(props) {
  //A usestate for showing a content of email
  const [readEmail, setReadEmail] = useState(false);
  //Usestate for an email
  const [selected, setSelected] = useState(null);

  let filteredEmails = props.emails;

  if (props.hideRead) filteredEmails = props.getReadEmails(filteredEmails);

  if (props.currentTab === "starred")
    filteredEmails = props.getStarredEmails(filteredEmails);

  const toggleStar = (targetEmail) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      );
    props.setEmails(updatedEmails);
  };

  const toggleRead = (targetEmail) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      );
    props.setEmails(updatedEmails);
  };

  //Show inbox or email content depending on the usestate
  if (readEmail) {
    return <EmailContent selected={selected} setReadEmail={setReadEmail} />;
  } else {
    return (
      <main className="emails">
        <ul>
          {filteredEmails.map((email, index) => (
            <Email
              key={index}
              email={email}
              toggleRead={toggleRead}
              toggleStar={toggleStar}
              readEmail={readEmail}
              setReadEmail={setReadEmail}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </ul>
      </main>
    );
  }
}
export default Emails;
