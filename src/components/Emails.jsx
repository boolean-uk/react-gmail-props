import Email from './Email'

function Emails ({filteredEmails, toggleRead, toggleStar}) {

    return (
        <ul>
        {filteredEmails.map((email, index) => (
          <Email 
            key = {index}
            email = {email}
            toggleRead = {toggleRead}
            toggleStar = {toggleStar}
          />
        ))}
      </ul>
    )
}

export default Emails