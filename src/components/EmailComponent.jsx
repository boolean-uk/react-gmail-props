// import React from 'react'
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

function EmailComponent({index, email, toggleRead, toggleStar, setCurrentTab}) {
  return (
            <li
              key={index}
              className={`email ${email.read ? 'read' : 'unread'}`}            >
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
              <div className="title" onClick={() => {
                // toggleRead(email)
                setCurrentTab(email.id)
              }}>{email.title}</div>
            </li>
  )
}

export default EmailComponent