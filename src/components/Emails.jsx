import Email from "./Email";

function Emails({ filteredEmails, toggleRead, toggleStar, handleEmailClick }) {
  const handleClick = (email) => {
    handleEmailClick(email);
  };

  return (
    <main className="emails">
      <ul>
        {filteredEmails.map((email, index) => (
          <Email
            key={index}
            email={email}
            toggleRead={toggleRead}
            toggleStar={toggleStar}
            handleEmailClick={handleClick}
          />
        ))}
      </ul>
    </main>
  );
}

export default Emails;
