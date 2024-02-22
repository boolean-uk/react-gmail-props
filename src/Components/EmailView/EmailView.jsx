import PropTypes from "prop-types";
import EmailPreview from "./EmailPreview";
import ReadMail from "./ReadMail";

function EmailView({
  filteredEmails,
  setEmails,
  showEmail,
  setShowEmail,
  setOpenedEmail,
  openedEmail,
}) {
  const toggleRead = (targetEmail) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      );
    setEmails(updatedEmails);
  };

  const toggleStar = (targetEmail) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      );
    setEmails(updatedEmails);
  };

  return (
    <main className="emails">
      {showEmail && <ReadMail mail={openedEmail} setShowEmail={setShowEmail} />}
      {!showEmail && (
        <ul>
          {filteredEmails.map((email, index) => (
            <EmailPreview
              key={index}
              email={email}
              toggleStar={toggleStar}
              toggleRead={toggleRead}
              setShowEmail={setShowEmail}
              setOpenedEmail={setOpenedEmail}
            />
          ))}
        </ul>
      )}
    </main>
  );
}
export default EmailView;

EmailView.propTypes = {
  filteredEmails: PropTypes.array,
  setEmails: PropTypes.func,
  setShowEmail: PropTypes.func,
  setOpenedEmail: PropTypes.func,
  showEmail: PropTypes.bool,
  openedEmail: PropTypes.object,
};
