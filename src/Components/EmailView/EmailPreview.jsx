import PropTypes from "prop-types";

function EmailPreview({
  email,
  toggleStar,
  toggleRead,
  setShowEmail,
  setOpenedEmail,
}) {
  const ShowEmail = () => {
    //console.log(email);
    setShowEmail(true);
    setOpenedEmail(email);
  };
  return (
    <li className={`email ${email.read ? "read" : "unread"}`}>
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
      <div className="sender" onClick={ShowEmail}>
        {email.sender}
      </div>
      <div className="title" onClick={ShowEmail}>
        {email.title}
      </div>
    </li>
  );
}
export default EmailPreview;
EmailPreview.propTypes = {
  index: PropTypes.number,
  email: PropTypes.object,
  toggleStar: PropTypes.func,
  toggleRead: PropTypes.func,
  setShowEmail: PropTypes.func,
  setOpenedEmail: PropTypes.func,
};
