import PropTypes from "prop-types";
import Email from "./Email";

import "./styles/Emails.css";

const getReadEmails = (emails) => emails.filter((email) => !email.read);

const getStarredEmails = (emails) => emails.filter((email) => email.starred);

function Emails(props) {
  let filteredEmails = props.emails;

  if (props.hideRead) filteredEmails = getReadEmails(filteredEmails);

  if (props.currentTab === "starred")
    filteredEmails = getStarredEmails(filteredEmails);

  return (
    <main className="emails">
      <ul>
        {filteredEmails.map((email, index) => (
          <Email key={index} email={email} setEmails={props.setEmails} />
        ))}
      </ul>
    </main>
  );
}

Emails.propTypes = {
  emails: PropTypes.array,
  hideRead: PropTypes.bool,
  currentTab: PropTypes.string,
  setEmails: PropTypes.func,
};

export default Emails;
