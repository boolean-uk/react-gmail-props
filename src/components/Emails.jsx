import PropTypes from "prop-types";
import Email from "./Email";

function Emails({ emails, toggleStar, toggleRead }) {
  return (
    <main className="emails">
      <ul>
        {emails.map((email, index) => (
          <Email
            key={index}
            email={email}
            toggleStar={toggleStar}
            toggleRead={toggleRead}
          />
        ))}
      </ul>
    </main>
  );
}

Emails.propTypes = {
  emails: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleStar: PropTypes.func.isRequired,
  toggleRead: PropTypes.func.isRequired,
};

export default Emails;
