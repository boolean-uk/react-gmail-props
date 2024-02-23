import Email from './Email';
import PropTypes from "prop-types";


function Emails({ emails, toggleRead, toggleStar }) {
  return (
    <main className="emails">
    <ul>
      {emails.map((email, index) => (
       
       <Email
       key={index}
       email={email}
       toggleRead={toggleRead}
       toggleStar={toggleStar}
     />

      ))}
    </ul>
  </main>
  )
}


Emails.propTypes = {
    emails: PropTypes.array.isRequired,
    toggleRead: PropTypes.func.isRequired,
    toggleStar: PropTypes.func.isRequired,
  };
  

export default Emails