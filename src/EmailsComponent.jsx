/* eslint-disable react/prop-types */

import './styles/emails.css'
import EmailComponent from "./EmailComponent"

function EmailsComponent ({filteredEmails, toggleRead, toggleStar}) {
    return (<main className="emails">
    <ul>
      {filteredEmails.map((email, index) => (
        <EmailComponent
            key={index}
            index={index}
            email={email}
            toggleRead={toggleRead}
            toggleStar={toggleStar}
        />
      ))}
    </ul>
  </main>)
}
export default EmailsComponent