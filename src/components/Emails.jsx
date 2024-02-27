import PropTypes from "prop-types";
import Email from "./Email";

function Emails({ filteredEmails, toggleRead, toggleStar }) {
  return (
    <main className="emails">
      <ul>
        {filteredEmails.map((email, index) => (
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
    filteredEmails: PropTypes.array,
    toggleRead: PropTypes.func,
    toggleStar: PropTypes.func
};

export default Emails;
