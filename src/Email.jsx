import PropTypes from "prop-types";
import { useState } from "react";

function Email({ email, toggleRead, toggleStar }) {
  const [displayContent, setDisplayContent] = useState(false);

  const handleTitleClick = () => {
    setDisplayContent(true);
  };

  const handleBackClick = () => {
    setDisplayContent(false);
  };

  return (
    <li className={`email ${email.read ? "read" : "unread"}`}>
      {!displayContent ? (
        <>
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
          <div className="sender">{email.sender}</div>
          <div className="title" onClick={handleTitleClick}>
            {email.title}
          </div>
        </>
      ) : (
        <>
          <div className="back-button" onClick={handleBackClick}>
            Back
          </div>
          <div className="content">{email.content}</div>
        </>
      )}
    </li>
  );
}

Email.propTypes = {
  email: PropTypes.object,
  toggleRead: PropTypes.func,
  toggleStar: PropTypes.func,
};

export default Email;
