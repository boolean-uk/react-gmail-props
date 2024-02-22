import React from "react";
import Email from "./Email";

export default function Emails({ emails, setEmails }) {
  return (
    <main className="emails">
      <ul>
        {emails.map((email, index) => (
          <Email email={email} index={index} setEmails={setEmails} />
        ))}
      </ul>
    </main>
  );
}
