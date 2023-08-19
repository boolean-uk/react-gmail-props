import "./styles/app.css";
import {useState} from 'react'

function Email({ index, email, toggleRead, toggleStar, setShowEmails, setShowOneEmail, setEmailIndex, setSearch}) {

  const displayEmail = () => {
    setShowEmails(false)
    setShowOneEmail(true)
    setEmailIndex(index)
    setSearch('')
  }

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
      <div className='email-view' onClick={displayEmail}>
        <div className="sender">{email.sender}</div>
        <div className="title">{email.title}</div>
      </div>
    </li>
  );
}

export default Email;
