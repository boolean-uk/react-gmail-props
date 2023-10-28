import React from "react";
import Email from "./Email";
const Emails = ({ filteredEmails, setEmails }) => {
  return (
    <main className='emails'>
      <ul>
        {filteredEmails.map((email, index) => (
          <Email setEmails={setEmails} email={email} index={index} />
        ))}
      </ul>
    </main>
  );
};

export default Emails;
