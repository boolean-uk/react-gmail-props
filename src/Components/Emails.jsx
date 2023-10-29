// import React from "react";
import "../styles/Emails.css";
import Email from "./Email";

// eslint-disable-next-line react/prop-types
function Emails({ filteredEmails, toggleRead, toggleStar }) {
  return (
    <>
      <main className="emails">
        <ul>
          {/* eslint-disable-next-line react/prop-types */}
          {filteredEmails.map((email, index) => (
            <Email
              key={index}
              index={index}
              email={email}
              toggleRead={toggleRead}
              toggleStar={toggleStar}
            />
          ))}
        </ul>
      </main>
    </>
  );
}

export default Emails;
