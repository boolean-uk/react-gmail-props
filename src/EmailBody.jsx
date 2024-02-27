import PropTypes from "prop-types";
import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import backArrow from './assets/icons/back-arrow.png'
import rateStarButton from './assets/icons/rate-star-button.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'
import './styles/EmailContent.css'

function EmailBody(props) {
  function close() {
    props.setIsOpen(false);
  }
  return (
    <div>
    <article className="email-content">
          <div className="title">
            <h1>{props.title}</h1>
          </div>
          <header className="email-content--header">
            <div className="avatar"></div>
            <div className="email-info">
              <div className="sender-info">
                <h2>{props.sender}</h2>
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
                <p>{props.body}</p>
              <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
            </div>
          </section>
        </article>
      <button className= "" style={{padding:5, marginLeft:10}} onClick={close}>Back</button>
    </div>
  );
}
EmailBody.propTypes = {
  title: PropTypes.string,
  sender: PropTypes.string,
  body: PropTypes.string,
  setIsOpen: PropTypes.func.isRequired
};
export default EmailBody;
