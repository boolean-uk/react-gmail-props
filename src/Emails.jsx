import PropTypes from "prop-types";
import Email from "./Email";
import "./styles/Emails.css";

function Emails(props) {
  const { filteredEmails, toggleRead, toggleStar, showState, showToggle } =
    props;

  return (
    <main className="emails">
      <ul>
        {filteredEmails.map((email, index) => (
          <Email
            key={index}
            email={email}
            index={index}
            toggleRead={toggleRead}
            toggleStar={toggleStar}
            showState={showState}
            showToggle={showToggle}
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
  showState: PropTypes.func,
  toggleReturn: PropTypes.func,
  showToggle: PropTypes.bool,
};

export default Emails;
