import React from 'react'

function Email({ email, toggleRead, toggleStar, onClick }) {

  const handleEmailClick = () => {
    onClick();
  };

  const handleCheckboxClick = (e) => {
    e.stopPropagation();
  };

  return (
    <li className={`email ${email.read ? 'read' : 'unread'}`} onClick={handleEmailClick}>
      <div className="select">
        <input
          className="select-checkbox"
          type="checkbox"
          checked={email.read}
          onChange={() => toggleRead(email.id)}
          onClick={handleCheckboxClick}
        />
      </div>
      <div className="star">
        <input
          className="star-checkbox"
          type="checkbox"
          checked={email.starred}
          onChange={() => toggleStar(email.id)}
          onClick={handleCheckboxClick}
        />
      </div>
      <div className="sender">{email.sender}</div>
      <div className="title">{email.title}</div>
    </li>
  );
}

export default Email;