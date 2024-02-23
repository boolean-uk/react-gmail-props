/* eslint-disable react/prop-types */
import '/src/styles/ContentArea/EmailContent/Header.css'

import backArrow from '/src/assets/icons/back-arrow.png'
import rateStarButton from '/src/assets/icons/rate-star-button.png'
import rubbishButton from '/src/assets/icons/rubbish-bin-delete-button.png'

export const Header = ({email}) => {
    return (
      <header className="email-content--header">
        <div className="avatar"></div>
        <div className="email-info">
          <div className="sender-info">
            <h2>{email.sender}</h2>
            <em>&lt;{email.email}&gt;</em>
          </div>
          <div className="user-info">
            <p>
              to me <em>&lt;nicolas@boolean.co.uk&gt;</em>
            </p>
          </div>
        </div>
        <div className="date-info">
          <p>{email.date}</p>
        </div>
        <div className="email-action-icons">
          <ul>
            <li>
              <img className="icon" src={backArrow} alt="reply button" />
            </li>
            <li>
              <img className="icon" src={rateStarButton} alt="star button" />
            </li>
            <li>
              <img className="icon" src={rubbishButton} alt="delete button" />
            </li>
          </ul>
        </div>
      </header>
    );
}