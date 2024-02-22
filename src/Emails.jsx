import PropTypes from 'prop-types'
import Email from './Email'
import DisplayEmail from './DisplayEmail'

const getReadEmails = emails => emails.filter(email => !email.read)
const getStarredEmails = emails => emails.filter(email => email.starred)
const getOpenEmail = emails => emails.filter(email => email.open)
const getSearchedEmails = (emails, search) => emails.filter(email => email.title.includes(search))

export default function EmailList({hideRead, currentTab, emails, setEmails, searchTitle})
{
  let filteredEmails = emails
  if (hideRead) filteredEmails = getReadEmails(filteredEmails)
  if (currentTab === 'starred') filteredEmails = getStarredEmails(filteredEmails)
  if (searchTitle.length !== 0) filteredEmails = getSearchedEmails(filteredEmails, searchTitle)
  
  // Checks which ones are open
  let openFilteters = filteredEmails
  openFilteters = getOpenEmail(openFilteters)

    return (
        <>
            <ul>
                {openFilteters.length === 1 && openFilteters[0].open === true &&
                <DisplayEmail email={openFilteters[0]} setEmails={setEmails}/>}

                {openFilteters.length === 0 && filteredEmails.map((email, index) => (
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
    setEmails: PropTypes.func,
    searchTitle: PropTypes.string
}