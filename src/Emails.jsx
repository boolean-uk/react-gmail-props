import PropTypes from "prop-types";
import Email from "./Email";

function Emails(props) {
  return (
    <>
      <main className="emails">
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
      </main>
    </>
  );
}
Emails.propTypes = {
  filteredEmails: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string,
      title: PropTypes.string,
      starred: PropTypes.boolean,
      read: PropTypes.boolean,
    })
  ),
  toggleRead: PropTypes.func,
  toggleStar: PropTypes.func,
};
export default Emails;
