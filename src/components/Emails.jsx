import React from "react";
import Email from "./Email";

function Emails({ filteredEmails, toggleRead, toggleStar, setSelectedEmail }) {
  return (
    <main className="emails">
      <ul>
        {filteredEmails.map((email, index) => (
          <Email
            key={index}
            email={email}
            toggleRead={toggleRead}
            toggleStar={toggleStar}
            setSelectedEmail ={setSelectedEmail}
          />
        ))}
      </ul>
    </main>
  );
}

export default Emails;
