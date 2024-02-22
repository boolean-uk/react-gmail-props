// Emails.jsx
import Email from "./Email";
import PropTypes from "prop-types";

function EmailsRender({ emails, toggleRead, toggleStar }) {
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

EmailsRender.propTypes = {
  emails: PropTypes.arrayOf(PropTypes.object),
  toggleRead: PropTypes.func,
  toggleStar: PropTypes.func,
};
export default EmailsRender;
