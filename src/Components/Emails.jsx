import PropTypes from "prop-types";
import Email from "./Email";

function Emails(props) {
  return (
    <ul>
      {props.filteredEmails.map((email, index) => (
        <Email
          key={email.text}
          index={index}
          email={email}
        />
      ))}
    </ul>
  );
}

Emails.propTypes = {
    filteredEmails: PropTypes.arrayOf(PropTypes.object),
};

export default Emails;
