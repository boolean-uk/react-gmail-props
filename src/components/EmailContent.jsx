import PropTypes from 'prop-types';
import backArrow from '../assets/icons/back-arrow.png'
import rateStarButton from '../assets/icons/rate-star-button.png'
import rubbishButton from '../assets/icons/rubbish-bin-delete-button.png'
import '../styles/App.css'

function EmailContent(props) {
    EmailContent.propTypes = {
        email: PropTypes.object,
      }
      return (
        <article className="email-content">
              <div className="title">
                <h1>{props.email.title}</h1>
              </div>
              <header className="email-content--header">
                <div className="avatar"></div>
                <div className="email-info">
                  <div className="sender-info">
                    <h2>{props.email.sender}</h2>
                    <em>&lt;no-reply@freepik.com&gt;</em>
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
              <section className="email-body">
                <div className="content">
                </div>
              </section>
              <section className="email-actions">
                <button>Reply</button>
                <button>Forward</button>
              </section>
            </article>
      )
}

export default EmailContent