import Email from './Email.jsx'
import PropTypes from 'prop-types';

import '../styles/Emails.css'

function Emails({ setSelectedEmail, toggleRead, toggleStar, filteredEmails }) {
  
  return (<main className="emails">
    <ul>
      {filteredEmails.map((email, index) => (
        <Email setSelectedEmail={setSelectedEmail} key={index} email={email} index={index} toggleRead={toggleRead} toggleStar={toggleStar} />
      ))}
    </ul>
  </main>)
}
Emails.propTypes = {
  filteredEmails: PropTypes.array.isRequired,
  toggleRead: PropTypes.func.isRequired,
  toggleStar: PropTypes.func.isRequired,
  setSelectedEmail: PropTypes.func.isRequired,
};
export default Emails