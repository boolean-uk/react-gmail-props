import PropTypes from "prop-types";
import Email from "./Email";
import "./styles/App.css";

function Emails({ emails, toggleRead, toggleStar }) {
  return (
    <main className="emails">
      <ul>
        {emails.map((email, index) => (
          <Email
            key={index}
            email={email}
            toggleRead={toggleRead}
            toggleStar={toggleStar}
          />
        ))}
      </ul>
    </main>
  );
}

Emails.propTypes = {
  emails: PropTypes.array.isRequired,
  toggleRead: PropTypes.func.isRequired,
  toggleStar: PropTypes.func.isRequired,
};

export default Emails;
