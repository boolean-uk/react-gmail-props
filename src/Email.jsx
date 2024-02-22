import PropTypes from "prop-types";
import "./styles/Email.css";

function Email(props) {
  const { email, index, toggleRead, toggleStar, toggleShow } = props;

  return (
    <li
      key={index}
      className={`email ${email.read ? "read" : "unread"}`}
      onClick={() => toggleShow(email)} // sends the whole email forward
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
  email: PropTypes.object,
  index: PropTypes.number,
  toggleRead: PropTypes.func,
  toggleStar: PropTypes.func,
  toggleShow: PropTypes.func,
  toggleReturn: PropTypes.func,
};

export default Email;
