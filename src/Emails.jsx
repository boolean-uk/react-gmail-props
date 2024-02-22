import PropTypes from 'prop-types'
import Email from './Email'
import DisplayEmail from './DisplayEmail'

const getReadEmails = emails => emails.filter(email => !email.read)
const getStarredEmails = emails => emails.filter(email => email.starred)
const getOpenEmail = emails => emails.filter(email => email.open)

export default function EmailList({hideRead, currentTab, emails, setEmails})
{
  let filteredEmails = emails
  if (hideRead) filteredEmails = getReadEmails(filteredEmails)
  if (currentTab === 'starred') filteredEmails = getStarredEmails(filteredEmails)
  
  // Checks which ones are open, otherwise returns all
  let openFilteters = filteredEmails
  openFilteters = getOpenEmail(openFilteters)
  if (openFilteters.length === 0) openFilteters = filteredEmails

    return (
        <>
            <ul>
                {openFilteters.length === 1 && <DisplayEmail email={openFilteters[0]} setEmails={setEmails}/>}
                {openFilteters.length > 1 && openFilteters.map((email, index) => (
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