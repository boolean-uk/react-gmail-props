import PropTypes from "prop-types"
import Email from "./Email"

function Emails({filteredEmails, toggleRead, toggleStar, setShowEmail})
{
    return(
            
      <main className="emails">
      <ul>
        {filteredEmails.map((email, index) => (
            <Email email={email} index={index} toggleRead={toggleRead} toggleStar={toggleStar} setShowEmail={setShowEmail}/>
        ))}
      </ul>
    </main>
    )
}

Emails.propTypes = {
    filteredEmails : PropTypes.array,
    toggleStar: PropTypes.func,
    toggleRead : PropTypes.func,
    setShowEmail : PropTypes.func
}

export default Emails