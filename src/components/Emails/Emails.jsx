import Email from "../Email/Email.jsx";
import "../Emails/Emails.css";

const Emails = ({ emails, hideRead, currentTab, setEmails }) => {
  const getReadEmails = (emails) => emails.filter((email) => !email.read);
  const getStarredEmails = (emails) => emails.filter((email) => email.starred);

  let filteredEmails = emails;

  if (hideRead) filteredEmails = getReadEmails(filteredEmails);

  if (currentTab === "starred")
    filteredEmails = getStarredEmails(filteredEmails);

  const toggleStar = (targetEmail) => {
    const updatedEmails = emails.map((email) =>
      email.id === targetEmail.id
        ? { ...email, starred: !email.starred }
        : email
    );
    setEmails(updatedEmails);
  };

  const toggleRead = (targetEmail) => {
    const updatedEmails = emails.map((email) =>
      email.id === targetEmail.id ? { ...email, read: !email.read } : email
    );
    setEmails(updatedEmails);
  };

  return (
    <main className="emails">
      <ul>
        {filteredEmails.map((email, index) => (
          <Email
            email={email}
            index={index}
            toggleRead={toggleRead}
            toggleStar={toggleStar}
            key={email.id}
          />
        ))}
      </ul>
    </main>
  );
};

export default Emails;
