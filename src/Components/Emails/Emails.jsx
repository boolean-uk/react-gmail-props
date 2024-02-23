import Email from "./Email/Email"
import PropTypes from 'prop-types';
import "./Emails.css"
import { useState, useEffect } from 'react'

const getReadEmails = emails => emails.filter(email => !email.read)
const getStarredEmails = emails => emails.filter(email => email.starred)

const Emails = ({emails, setEmails, hideRead, currentTab, setTarget, showDetails, searchQuery}) => {
  const [filteredEmails, setFilteredEmails] = useState(emails)

  useEffect(() => {
    let processedEmails = emails
    if (searchQuery !== "") {
      processedEmails = processedEmails.filter((email => 
        email.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        email.sender.toLowerCase().includes(searchQuery.toLowerCase())
      ))
    }

    if (hideRead) {
      processedEmails = getReadEmails(processedEmails)
    } 
    if (currentTab === 'starred') {
      processedEmails = getStarredEmails(processedEmails)
    }
    setFilteredEmails(processedEmails)
  }, [emails, searchQuery, currentTab, hideRead])

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