import React from 'react'
import './styles/Email.css'

function Email({email, index, toggleRead, toggleStar, setCurrentTab, setCurrentEmail}) {
  return (
    <li
    key={index}
    className={`email ${email.read ? 'read' : 'unread'}`}
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
    <div className="title" 
      onClick={() => {
        setCurrentEmail(email.id)
        setCurrentTab('emails')
        }
    }
    >{email.title}</div>
    </li>
  )
}

export default Email