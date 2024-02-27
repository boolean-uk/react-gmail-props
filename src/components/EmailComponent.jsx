/*`Email` component that is a list item*/ 

//Email is the child's child component because it's being rendered within the Emails component and receives props from it.

// Here we define a new component called Email which takes email, toggleStar, and toggleRead as props
const Email = ({ email, toggleStar, toggleRead }) => {
  return (
    <li className={`email ${email.read ? 'read' : 'unread'}`}> 
      <div className="select">
        <input
          className="select-checkbox"
          type="checkbox"
          checked={email.read} // Set the checkbox checked status based on email's read status
          onChange={() => toggleRead(email)} // Call toggleRead function when checkbox is clicked
        />
      </div>
      <div className="star">
        <input
          className="star-checkbox"
          type="checkbox"
          checked={email.starred} // Set the checkbox checked status based on email's starred status
          onChange={() => toggleStar(email)} // Call toggleStar function when checkbox is clicked
        />
      </div>
      <div className="sender">{email.sender}</div> {/* Display email sender */}
      <div className="title">{email.title}</div> {/* Display email title */}
    </li>
  );
};

export default Email; // Export the Email component
