import Email from "./Email";
import ViewEmail from "./ViewEmail";
import { useState } from "react";

function MainContent(props) {
  let filteredEmails = props.emails;
  if (props.hideRead) filteredEmails = props.getReadEmails(filteredEmails);
  if (props.currentTab === "starred")
    filteredEmails = props.getStarredEmails(filteredEmails);

  const toggleStar = (targetEmail) => {
    const updatedEmails = props.emails.map((email) =>
      email.id === targetEmail.id
        ? { ...email, starred: !email.starred }
        : email
    );
    props.setEmails(updatedEmails);
  };

  const toggleRead = (targetEmail) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      );
    props.setEmails(updatedEmails);
  };

  if (props.activeEmail !== null) {
    return (
      <ViewEmail
        activeEmail={props.activeEmail}
        setActiveEmail={props.setActiveEmail}
      />
    );
  } else {
    return (
      <main className="emails">
        <ul>
          {filteredEmails.map((email, index) => (
            <Email
              email={email}
              key={index}
              toggleRead={toggleRead}
              toggleStar={toggleStar}
              activeEmail={props.activeEmail}
              setActiveEmail={props.setActiveEmail}
            />
          ))}
        </ul>
      </main>
    );
  }
}

export default MainContent;
