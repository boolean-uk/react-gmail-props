import "./ReadMail.css";
import PropTypes from "prop-types";

function ReadMail({ mail, setShowEmail }) {
  const closeEmail = () => {
    setShowEmail(false);
  };

  return (
    <div className={`mail-item ${mail.read ? "read" : ""}`}>
      <div className="mail-header">
        <button className="Back-button" onClick={closeEmail}>
          Go back
        </button>
        <h3 className="mail-title">{mail.title}</h3>
        <span className={`mail-star ${mail.starred ? "starred" : ""}`}>★</span>
      </div>
      <p className="mail-sender">From: {mail.sender}</p>
      <p className="mail-body">{mail.body}</p>
    </div>
  );
}

export default ReadMail;

ReadMail.propTypes = {
  mail: PropTypes.object,
  setShowEmail: PropTypes.func,
};
