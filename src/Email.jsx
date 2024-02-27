import PropTypes from "prop-types";

export default function Email({ email, toggleRead, toggleStar, onClick }) {
  return (
    //if not clicked show this else
    //show the email
    <div>
      <li className={`email ${email.read ? "read" : "unread"}`}>
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
        <div onClick={onClick} className="sender">
          {email.sender}
        </div>
        <div onClick={onClick} className="title">
          {email.title}
        </div>
      </li>
    </div>
  );
}

Email.propTypes = {
  email: PropTypes.shape({
    read: PropTypes.bool.isRequired,
    starred: PropTypes.bool.isRequired,
    sender: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  toggleRead: PropTypes.func.isRequired,
  toggleStar: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
