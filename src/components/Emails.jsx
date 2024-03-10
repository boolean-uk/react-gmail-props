import Email from "./Email";
import EmailResponseComponent from "../EmailResponseComponent";
import { useState } from "react";
import initialEmails from "../data/emails";
import PropTypes from 'prop-types'

function Emails(props) {

  const [selectedEmailId, setSelectedEmailId] = useState(null);

  const selectEmail = (emailId) => {
    setSelectedEmailId(emailId);
  };

  const selectedEmail = props.emails.find((email) => email.id === selectedEmailId);


  return (
    <main className="emails">
      {selectedEmailId == null ? (
        <ul>
          {props.filteredEmails.map((email, index) => (
            <Email
              key={index}
              email={email}
              selectEmail={selectEmail}
              toggleRead={props.toggleRead}
              toggleStar={props.toggleStar}
            />
          ))}
        </ul>
      ) : (
        <>
          <button className="button" onClick={() => setSelectedEmailId(initialEmails.id)}>Back</button>
          <EmailResponseComponent email={selectedEmail} />
        </>
      )}
    </main>
  );
}

Emails.propTypes = {
  toggleRead: PropTypes.func,
  toggleStar: PropTypes.func,
  emails: PropTypes.arrayOf(PropTypes.object),
  filteredEmails: PropTypes.arrayOf(PropTypes.object)
}

export default Emails;