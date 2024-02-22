import PropTypes from 'prop-types'
import Email from './Email'

const getReadEmails = emails => emails.filter(email => !email.read)
const getStarredEmails = emails => emails.filter(email => email.starred)

export default function EmailList({hideRead, currentTab, emails, setEmails})
{
  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)
  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

    return (
        <>
            <ul>
          {filteredEmails.map((email, index) => (
            <Email email={email} key={index} setEmails={setEmails} />
          ))}
        </ul>
        </>
    )
}

EmailList.propTypes =
{
    hideRead: PropTypes.bool,
    currentTab: PropTypes.string,
    emails: PropTypes.array,
    setEmails: PropTypes.func
}