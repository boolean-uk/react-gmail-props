import PropTypes from "prop-types";
import Email from "./email";
function Emails(props) {
  const emails = props.emails.filter((email)=> email.title.toLowerCase().includes(props.search.toLowerCase()));

  return (
    <main className="emails">
      <ul>
        {emails.map((email, index) => (
          <Email
            key={email.id}
            index={index}
            email={email}
            setEmails={props.setEmails}
            open={false}
            setOpenEmail={props.setOpenEmail}
            setIsOpen={props.setIsOpen}
          />
        ))}
      </ul>
    </main>
  );
}
Emails.propTypes = {
  emails: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string,
      read: PropTypes.bool.isRequired,
      starred: PropTypes.bool.isRequired,
    })
  ).isRequired,
  search: PropTypes.string,
  setEmails: PropTypes.func.isRequired,
  setOpenEmail: PropTypes.func.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
export default Emails;
