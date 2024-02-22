import PropTypes from "prop-types"
import Email from "./Email"

function Emails({filteredEmails, toggleRead, toggleStar})
{
    return(
            
      <main className="emails">
      <ul>
        {filteredEmails.map((email, index) => (
            <Email email={email} index={index} toggleRead={toggleRead} toggleStar={toggleStar}/>
        ))}
      </ul>
    </main>
    )
}

Emails.propTypes = {
    filteredEmails : PropTypes.array,
    toggleStar: PropTypes.func,
    toggleRead : PropTypes.func
}

export default Emails