import React from 'react'
import './../../styles/email-content.css' 
import initialEmails from './../../data/emails'

import flaticonWelcomeImage from './../../assets/images/flaticon-welcome-image.png'
import backArrow from './../../assets/icons/back-arrow.png'
import rateStarButton from './../../assets/icons/rate-star-button.png'
import rubbishButton from './../../assets/icons/rubbish-bin-delete-button.png'

function EmailContentComponent({currentTab}) {
    const email = initialEmails[currentTab-1]
    console.log(email)
  return (
    <article className="email-content">
      <div className="title">
        <h1>{email.title}</h1>
      </div>
      <header className="email-content--header">
        <div className="avatar"></div>
        <div className="email-info">
          <div className="sender-info">
            <h2>{email.sender}</h2>
            <em>&lt;{email.sender}@something.com&gt;</em>
          </div>
          <div className="user-info">
            <p>
              to me <em>&lt;user@tester.com&gt;</em>
            </p>
          </div>
        </div>
        <div className="date-info">
          <p>17 March 2021, 09:33</p>
        </div>
        <div className="email-action-icons">
          <ul>
            <li>
              <img className="icon" src={backArrow} alt="reply button" />
            </li>
            <li>
              <img className="icon" src={rateStarButton} alt="star button"
              />
            </li>
            <li>
              <img
                className="icon"
                src={rubbishButton}
                alt="delete button"
              />
            </li>
          </ul>
        </div>
      </header>
      <section className="email-body">
        <div className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </section>
      <section className="email-actions">
        <button>Reply</button>
        <button>Forward</button>
      </section>
    </article>
  )
}

export default EmailContentComponent