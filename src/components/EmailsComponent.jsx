import Email from './EmailComponent'; // Import the Email component

//Emails is the child component because it renders multiple instances of the Email component.

// Here we define a new component called Emails which takes emails, toggleStar, and toggleRead as props
const EmailsComponent = ({ filteredEmails, toggleStar, toggleRead }) => {
  return (
    <main className="emails">
         <ul>
      {/* Map through the Emails array and render an Email component for each email */}
      {filteredEmails.map((email, index) => (
        <Email
          key={index} // Use the email's index as the key (should use a unique identifier)
          email={email} // Pass the email object as a prop to the Email component
          toggleStar={toggleStar} // Passing the toggleStar function as a prop to the Email component
          toggleRead={toggleRead} // Passing the toggleRead function as a prop to the Email component
        />
      ))}
    </ul>
       {/* <ul>
          {filteredEmails.map((email, index) => (
            <li
              key={index}
              className={`email ${email.read ? 'read' : 'unread'}`}
            >
              <div className="select">
                <input
                  className="select-checkbox"
                  type="checkbox"
                  checked={email.read}
                  onChange={() => toggleRead(email)}
                />
              </div>
              <div className="star">
                <input
                  className="star-checkbox"
                  type="checkbox"
                  checked={email.starred}
                  onChange={() => toggleStar(email)}
                />
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>
            </li>
          ))}
        </ul>*/}
      </main>
   
  );
};

export default EmailsComponent; // Export the Emails component

