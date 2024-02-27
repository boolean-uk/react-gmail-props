import PropTypes from "prop-types";

function Email({ emailData, toggleRead, toggleStar, setDisplayedEmail}) {
  return (
    <li
      key={emailData.id}
      className={`email ${emailData.read ? "read" : "unread"}`}
      onClick={() => setDisplayedEmail(emailData)}
    >
      <div className="select">
        <input
          className="select-checkbox"
          type="checkbox"
          checked={emailData.read}
          onChange={() => toggleRead(emailData)}
        />
      </div>
      <div className="star">
        <input
          className="star-checkbox"
          type="checkbox"
          checked={emailData.starred}
          onChange={() => toggleStar(emailData)}
        />
      </div>
      <div className="sender">{emailData.sender}</div>
      <div className="title">{emailData.title}</div>
    </li>
  );
}

Email.propTypes = {
  emailData: PropTypes.object,
  toggleRead: PropTypes.func,
  toggleStar: PropTypes.func,
  setDisplayedEmail: PropTypes.func
};

export default Email;
