import DetailedEmail from "./DetailedEmail";
import Email from "./Email";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Emails({ emails, toggleRead, toggleStar }) {
  const [clicked, setClicked] = useState(false);
  const [email, setEmail] = useState(null);

  const handleEmailClick = (index) => {
    console.log(index);
    setClicked(!clicked);
    setEmail(emails[index]);
  };
  return (
    //if a email is clicked show the detailed email
    //else show the email
    <div>
      {clicked ? (
        <DetailedEmail
          email={email}
          toggleRead={toggleRead}
          toggleStar={toggleStar}
          setClicked={setClicked}
        />
      ) : (
        <ul className="emails">
          {emails.map((email) => (
            <Email
              key={email.id}
              email={email}
              toggleRead={toggleRead}
              toggleStar={toggleStar}
              onClick={() => handleEmailClick(email.id - 1)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

Emails.propTypes = {
  emails: PropTypes.arrayOf(
    PropTypes.shape({
      read: PropTypes.bool.isRequired,
      starred: PropTypes.bool.isRequired,
      sender: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleRead: PropTypes.func.isRequired,
  toggleStar: PropTypes.func.isRequired,
};
