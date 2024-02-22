import React from "react";
import Email from "./Email";

export default function Emails({ emails, setEmails, selectEmail }) {
  return (
    <main className="emails">
      <ul>
        {emails.map((email, index) => (
          <Email
            key={`email-${index}`}
            email={email}
            index={index}
            setEmails={setEmails}
            onClick={() => selectEmail(email)}
          />
        ))}
      </ul>
    </main>
  );
}
