
import './styles/App.css'
import React from 'react';


export default function MailComponent({toggleRead, toggleStar, index, email, handleEmailClick}) {
    const handleCheckBoxClick = (e) => {
        e.stopPropagation()
    }
    return <>
    <li
              key={index}
              className={`email ${email.read ? 'read' : 'unread'}`}
              onClick={() => handleEmailClick(email)}
            >
       
              <div className="select">
       
                <input
                  className="select-checkbox"
                  type="checkbox"
                  checked={email.read}
                  onChange={() => toggleRead(email)}
                  onClick={handleCheckBoxClick}
                />
            
              </div>
              <div className="star">
                <input
                  className="star-checkbox"
                  type="checkbox"
                  checked={email.starred}
                  onChange={() => toggleStar(email)}
                  onClick={handleCheckBoxClick}
                />
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>
            </li>
            </>
}