import PropTypes from "prop-types";

import Email from "./Email";

function Emails(props) {
  /** Change if is read or not for targeted email */
  const toggleRead = (target) => {
    props.setEmails(
      props.emails.map((email) =>
        email.id === target.id ? { ...email, read: !email.read } : email
      )
    );
  };
  /** Change if is starred or not for targeted email */
  const toggleStar = (target) => {
    props.setEmails(
      props.emails.map((email) =>
        email.id === target.id ? { ...email, starred: !email.starred } : email
      )
    );
  };
  
  return (
    <main className="emails">
      <ul>
        {props.filteredEmails.map((email, index) => (
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

Emails.propTypes = {
  emails: PropTypes.object,
  setEmails: PropTypes.func,
  filteredEmails: PropTypes.object,
};

export default Emails;
