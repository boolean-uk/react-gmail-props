import PropTypes from "prop-types";
import Email from "./Email";

import "../styles/Emails.css";

function Emails({ filteredEmails, toggleRead, toggleStar, selectEmail }) {
  return (
    <main className="emails">
      <ul>
        {filteredEmails.map((email, index) => (
          <Email
            key={index}
            email={email}
            toggleRead={toggleRead}
            toggleStar={toggleStar}
            selectEmail={selectEmail}
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
  selectEmail: PropTypes.func,
};

export default Emails;
