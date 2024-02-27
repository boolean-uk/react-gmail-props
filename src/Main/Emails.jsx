import Email from "./Email.jsx";
function Emails(props) {
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

  return (
    <main className="emails">
      <ul>
        {filteredEmails.map((email,index) => (
          <Email
            key={index}
            email={email}
            toggleRead={toggleRead}
            toggleStar={toggleStar}
          />
        ))}
      </ul>
    </main>
  );
}
export default Emails;
