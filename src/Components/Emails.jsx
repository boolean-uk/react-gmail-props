import PropTypes from "prop-types";
import { useState } from "react";

import Email from "./Email";
import EmailView from "./EmailView/EmailView";

function Emails(props) {
  const [selected, setSelected] = useState(null)

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
    )
  }

  return (
    <main className="emails">
      <ul>
        {selected !== null && (
          <EmailView 
          email={selected} 
          setSelected={setSelected} 
          />
        )}
        {selected === null &&
          props.filteredEmails.map((email, index) => (
            <Email
              key={index}
              email={email}
              toggleRead={toggleRead}
              toggleStar={toggleStar}
              setSelected={setSelected}
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
