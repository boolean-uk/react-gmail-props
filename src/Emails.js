import "./styles/app.css";

import Email from "./Email";
import DisplayEmail from "./DisplayEmail";
import { useState } from "react";

function Emails({ filteredEmails, toggleRead, toggleStar, setSearch }) {
  
  const [showEmails, setShowEmails] = useState(true);
  const [showOneEmail, setShowOneEmail] = useState(false);
  const [emailIndex, setEmailIndex] = useState(-1);

  return (
    <main className="emails">
      <ul>
        {showEmails &&
          filteredEmails.map((email, index) => (
            <Email
              key={index}
              index={index}
              email={email}
              toggleRead={toggleRead}
              toggleStar={toggleStar}
              setShowEmails={setShowEmails}
              setShowOneEmail={setShowOneEmail}
              setEmailIndex={setEmailIndex}
              setSearch={setSearch}
            />
          ))}
      </ul>

      {showOneEmail && emailIndex !== -1 && (
        <DisplayEmail
          sender={filteredEmails[emailIndex].sender}
          title={filteredEmails[emailIndex].title}
          setShowEmails={setShowEmails}
          setShowOneEmail={setShowOneEmail}
        />
      )}
    </main>
  );
}

export default Emails;
