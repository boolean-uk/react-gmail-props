import backArrow from '../../assets/icons/back-arrow.png'
import rubbishButton from '../../assets/icons/rubbish-bin-delete-button.png'
import rateStarButton from '../../assets/icons/rate-star-button.png'
import EmailTitle from './EmailTitle';
import EmailActions from './EmailActions';
import EmailBody from './EmailBody';
import Prototype from 'prop-types'

import '../../styles/email/EmailContent.css'




const EmailContent = (props) => {

      EmailContent.Prototype = {
        setShowEmail: Prototype.bool,
        emailToShow: Prototype.object
      }

      const {setShowEmail, emailToShow} = props ?? {}

      return(
        <article className="email-content">
        <EmailTitle title={emailToShow.title}/>
        <header className="email-content--header">
            <div className="avatar"></div>
            <div className="email-info">
              <div className="sender-info">
                <h2>{emailToShow.sender}</h2>
                <em>&lt;{emailToShow.sender}&gt;</em>
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
                  <img className="icon" src={backArrow} alt="reply button" onClick={() => setShowEmail(false)}/>
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
          <EmailBody />
          <EmailActions />
        </article>
      ) 
      
    }

    export default EmailContent;