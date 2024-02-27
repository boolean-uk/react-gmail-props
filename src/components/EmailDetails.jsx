function EmailDetails({ email, handleBack, toggleRead, toggleStar }) {
  const { sender, title, content, read, starred } = email;

  const handleToggleRead = () => {
    toggleRead(email);
  };

  const handleToggleStar = () => {
    toggleStar(email);
  };

  return (
    <div className="email-details">
      <button onClick={handleBack}>Back to List</button>
      <h2>{title}</h2>
      <div>
        <p>From: {sender}</p>
        <p>{content}</p>
        <button onClick={handleToggleRead}>
          {read ? "Mark as unread" : "Mark as read"}
        </button>
        <button onClick={handleToggleStar}>
          {starred ? "Unstar" : "Star"}
        </button>
      </div>
    </div>
  );
}

export default EmailDetails;
