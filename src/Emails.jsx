import PropTypes from "prop-types";
import Email from "./Email";
import "./styles/Emails.css";

function Emails(props) {
  const { filteredEmails, toggleRead, toggleStar, toggleShow } = props;

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
            toggleShow={toggleShow}
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
  toggleShow: PropTypes.func,
  toggleReturn: PropTypes.func,
};

export default Emails;
