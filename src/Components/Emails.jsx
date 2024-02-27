import PropTypes from "prop-types";
import Email from "./Email";

function Emails(props) {
  return (
    <ul>
      {props.filteredEmails.map((email, index) => (
        <Email
          key={index}
          email={email}
          toggleRead={props.toggleRead}
          toggleStar={props.toggleStar}
        />
      ))}
    </ul>
  );
}

Emails.propTypes = {
  filteredEmails: PropTypes.arrayOf(PropTypes.object),
  toggleRead: PropTypes.func,
  toggleStar: PropTypes.func,
};

export default Emails;
