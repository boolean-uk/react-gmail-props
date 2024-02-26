import PropTypes from "prop-types";
import Email from "./Email";
import "./styles/App.css";
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
              SetOpen={props.SetOpen}
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
  SetOpen: PropTypes.func,
};
export default Emails;
