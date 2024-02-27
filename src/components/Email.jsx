import React from "react";

function Email({ email, toggleStar, toggleRead, index, setSelectedEmail }) {
  return (
    <>
      <li key={index} className={`email ${email.read ? "read" : "unread"}`} >
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
        {/*opens and displays email by click on the email title */}
        <div className="title" onClick={() => setSelectedEmail(email)}>
          {email.title}
        </div>
      </li>
    </>
  );
}

export default Email;
