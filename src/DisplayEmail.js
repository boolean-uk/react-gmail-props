import "./styles/email.css";
import emailImg from "./img/emailImg.png";
import emailRightImage from "./img/emailRightImg.png";

function DisplayEmail({sender, title, setShowEmails, setShowOneEmail}) {

    const goBackFunction = () => {
        setShowEmails(true)
        setShowOneEmail(false)
    }

  return (
    <>
      <div className="email-write">
        <div className="header">
          <img src={emailImg} alt="user photo" className="user-photo" />
          <span className="sender">
            {sender}
          </span>
          <img src={emailRightImage} alt="small icon" className="small-icon" />
        </div>
        <div className="email-text">{title}</div>
        <div className="actions"></div>
      </div>
      <button className="back-button" onClick={goBackFunction}>Back</button>
    </>
  );
}

export default DisplayEmail;
