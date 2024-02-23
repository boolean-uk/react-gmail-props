import PropTypes from "prop-types";
import "../styles/Email.css";

function Email({ email, toggleStar, toggleRead, onSelect }) {
  return (
    <li
      className={`email ${email.read ? "read" : "unread"}`}
      onClick={() => onSelect(email)}
    >
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
      <div className="sender">{email.sender}</div>
      <div className="title">{email.title}</div>
    </li>
  );
}

Email.propTypes = {
  email: PropTypes.shape({
    read: PropTypes.bool.isRequired,
    starred: PropTypes.bool.isRequired,
    sender: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  toggleStar: PropTypes.func.isRequired,
  toggleRead: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Email;
