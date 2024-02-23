import Email from "./Email/Email"
import PropTypes from 'prop-types';
import "./Emails.css"

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)


const Emails = ({emails, setEmails, hideRead, currentTab}) => {
  
    let filteredEmails = emails
    if (hideRead) filteredEmails = getReadEmails(filteredEmails)
  
    if (currentTab === 'starred')
      filteredEmails = getStarredEmails(filteredEmails)
  

    return (
      <main className="emails">
        <ul>
          {filteredEmails.map((email, index) => (
            <Email key={index} email={email} setEmails={setEmails}/>
          ))}
        </ul>
      </main>
    )
}

Emails.propTypes = {
    emails: PropTypes.array,
    setEmails: PropTypes.func,
    hideRead: PropTypes.bool,
    currentTab: PropTypes.string,
}

export default Emails