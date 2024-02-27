import PropTypes from "prop-types";
import './styles/Email.css'

function Email(props) {
  const index = props.index;
  const email = props.email;

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
  function toggleOpen() {
    props.setIsOpen(true);
    props.setOpenEmail(props.email)
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === props.email.id ? { ...email, read: true } : email
      );
    props.setEmails(updatedEmails);
  

}
  return (
    <>
      <li key={index} className={`email ${email.read ? "read" : "unread"}`}>
        <div className="select">
          <input
            className="select-checkbox"
            type="checkbox"
            checked={email.read}
            onChange={() => toggleRead(email)}
          />
        </div>
        <div className="star">
          <input
            className="star-checkbox"
            type="checkbox"
            checked={email.starred}
            onChange={() => toggleStar(email)}
          />
        </div>
          <div onClick={toggleOpen} className="sender" >{email.sender}</div>
          <div  onClick={toggleOpen} className="title">{email.title}</div>
       
      </li>
    </>
  );
}
Email.propTypes = {
  email: PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
    read: PropTypes.bool.isRequired,
    starred: PropTypes.bool.isRequired,
  }),
  index: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  setEmails: PropTypes.func.isRequired,
  setOpenEmail: PropTypes.func.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
export default Email;
