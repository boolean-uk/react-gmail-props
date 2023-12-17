import ImportedEmail from '../Email/Email.jsx';

// Change the component name to ImportedEmail
const ImportEmail = ({ email, index, toggleRead, toggleStar }) => {
  return (
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
      <div className="sender">{email.sender}</div>
      <div className="title">{email.title}</div>
    </li>
  );
};

export default ImportEmail;