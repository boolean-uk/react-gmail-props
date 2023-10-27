import OpenEmailReply from './OpenEmailReply'

import flaticonWelcomeImage from '../OpenEmail content/flaticon-welcome-image.png'
import backArrow from '../OpenEmail content/back-arrow.png'
import rateStarButton from '../OpenEmail content/rate-star-button.png'
import rubbishButton from '../OpenEmail content/rubbish-bin-delete-button.png'

import './OpenEmail.css'

function OpenEmail({showEmail, setShowEmail, emailBody}) {

    return (
        <div>
            <article className="email-content">
          <div className="email-title">
            <button 
            onClick={() => setShowEmail(!showEmail)}
            >Go back</button>
            <h1>{emailBody.title}</h1>
          </div>
          <header className="email-content--header">
            <div className="avatar"></div>
            <div className="email-info">
              <div className="sender-info">
                <h2>{emailBody.sender}</h2>
                <em>&lt;no-reply@{(emailBody.sender.toLowerCase()).replaceAll(" ", "")}.com&gt;</em>
              </div>
              <div className="user-info">
                <p>
                  to me <em>&lt;nicolas@boolean.co.uk&gt;</em>
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
                  <img
                    className="icon"
                    src={rateStarButton}
                    alt="star button"
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
          <OpenEmailReply emailBody={emailBody}></OpenEmailReply>
          <section className="email-body">
            <div className="content">
              <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
            </div>
          </section>
          <section className="email-actions">
            <button>Reply</button>
            <button>Forward</button>
          </section>
        </article>
        </div>
    )
}

export default OpenEmail