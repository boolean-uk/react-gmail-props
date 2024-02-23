import Email from "./Email/Email"
import PropTypes from 'prop-types';
import "./Emails.css"

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

const Emails = ({emails, setEmails, hideRead, currentTab, setTarget, showDetails}) => {
  let filteredEmails = emails
  if (hideRead) filteredEmails = getReadEmails(filteredEmails)
  
  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  return (
    <main className="emails">
      <ul>
      {filteredEmails.map((email) => {
        return(
          <li key={email.id} className={`email ${email.read ? 'read' : 'unread'}`}>
          <Email email={email} setEmails={setEmails} setTarget={setTarget} showDetails={showDetails}/>
        </li>
        )
      })}
      </ul>
    </main>
  )
}

Emails.propTypes = {
    emails: PropTypes.array,
    setEmails: PropTypes.func,
    hideRead: PropTypes.bool,
    currentTab: PropTypes.string,
    setTarget: PropTypes.func,
    showDetails: PropTypes.func,
}

export default Emails