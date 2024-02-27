import Email from "../Email"

import PropTypes from "prop-types"

function Emails({filteredEmails, setEmails, setOpenedEmail}) {
    return (
        <main className="emails">
        <ul>
          {filteredEmails.map((email, index) => (
            <Email key={index} email={email} index={index} setEmails={setEmails} setOpenedEmail={setOpenedEmail}/>
          ))}
        </ul>
      </main>
    )
}

Emails.propTypes = {
    filteredEmails: PropTypes.arrayOf(PropTypes.object),
    setEmails: PropTypes.func,
    setOpenedEmail: PropTypes.func,
}

export default Emails