import "./styles/Emails.css";
import PropTypes from "prop-types";
import Email from "./Email";

function Emails({ filteredEmails, toggleRead, toggleStar, setDisplayedEmail }) {
  return (
    <main className="emails">
      <ul>
        {filteredEmails.map((email, index) => (
          <Email
            key={index}
            emailData={email}
            toggleRead={toggleRead}
            toggleStar={toggleStar}
            setDisplayedEmail={setDisplayedEmail}
          />
        ))}
      </ul>
    </main>
  );
}

Emails.propTypes = {
  filteredEmails: PropTypes.array,
  toggleRead: PropTypes.func,
  toggleStar: PropTypes.func,
  setDisplayedEmail: PropTypes.func
};

export default Emails;
