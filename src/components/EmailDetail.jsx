import PropTypes from "prop-types";
import "../styles/EmailDetail.css";

function EmailDetail({ email, onBack }) {
  return (
    <div className="email-detail">
      <button onClick={onBack}>Back</button>
      <h2>{email.title}</h2>
      <h3>From: {email.sender}</h3>
      <p>{email.body}</p> {}
    </div>
  );
}

EmailDetail.propTypes = {
  email: PropTypes.shape({
    title: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  onBack: PropTypes.func.isRequired,
};

export default EmailDetail;
