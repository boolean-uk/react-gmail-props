// eslint-disable-next-line react/prop-types
function Email({ index, email, toggleRead, toggleStar }) {
  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      <li key={index} className={`email ${email.read ? "read" : "unread"}`}>
        <div className="select">
          <input
            className="select-checkbox"
            type="checkbox"
            // eslint-disable-next-line react/prop-types
            checked={email.read}
            onChange={() => toggleRead(email)}
          />
        </div>
        <div className="star">
          <input
            className="star-checkbox"
            type="checkbox"
            // eslint-disable-next-line react/prop-types
            checked={email.starred}
            onChange={() => toggleStar(email)}
          />
        </div>
        {/* eslint-disable-next-line react/prop-types */}
        <div className="sender">{email.sender}</div>
        {/* eslint-disable-next-line react/prop-types */}
        <div className="title">{email.title}</div>
      </li>
    </>
  );
}

export default Email;
