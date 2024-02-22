import PropTypes from "prop-types";
import Email from "./Email";
function Emails(props) {
  return (
    <main className="emails">
      <ul>
        {props.filteredEmails.map((email, index) => (
          <Email
            key={index}
            email={email}
            toggleStar={props.toggleStar}
            toggleRead={props.toggleRead}
          />
        ))}
      </ul>
    </main>
  );
}
Emails.propTypes = {
  filteredEmails: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string,
      title: PropTypes.string,
      starred: PropTypes.bool,
      read: PropTypes.bool,
    })
  ),
  toggleStar: PropTypes.func,
  toggleRead: PropTypes.func,
};
export default Emails;
