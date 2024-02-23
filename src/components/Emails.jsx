import PropTypes from 'prop-types';
import Email from './Email';


function Emails(props) {
  Emails.propTypes = {
    emails: PropTypes.object,
    setEmails: PropTypes.object,
    currentTab: PropTypes.object,
    setCurrentTab: PropTypes.object,
    hideRead: PropTypes.object,
    setHideRead: PropTypes.object
  }

  const getReadEmails = emails => emails.filter(email => !email.read)

  const getStarredEmails = emails => emails.filter(email => email.starred)


  let filteredEmails = props.emails

  if (props.hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (props.currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  return (
    <main className="emails">
        <ul>
          {filteredEmails.map((email, index) => (
            <Email email = {email} key ={index} setEmails={props.setEmails} />
          ))}
        </ul>
      </main>
  )
}

export default Emails