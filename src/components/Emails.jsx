import PropTypes from 'prop-types';
import Email from './Email';
import { useState } from 'react'


function Emails(props) {
  Emails.propTypes = {
    emails: PropTypes.array,
    setEmails: PropTypes.func,
    currentTab: PropTypes.string,
    setCurrentTab: PropTypes.func,
    hideRead: PropTypes.bool,
    setHideRead: PropTypes.func
  }
  const [selected, setSelected] = useState(null)

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
            <Email email = {email} key ={index} setEmails={props.setEmails} setSelected={setSelected} selected= {selected} />
          ))}
        </ul>
      </main>
  )
}

export default Emails