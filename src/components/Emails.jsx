import '../styles/Emails.css'
import Email from "./Email"

function Emails({emails, hideRead, currentTab, toggleRead, toggleStar}){

  const getReadEmails = emails => emails.filter(email => !email.read)

  const getStarredEmails = emails => emails.filter(email => email.starred)

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  return(
    <>
  <main className="emails">
        <ul>
          {filteredEmails.map((email, index) => (
            <Email 
            email={email} 
            key={index} 
            toggleRead={toggleRead}
            toggleStar={toggleStar} />
          ))}
        </ul>
      </main>
    </>
  )
}

export default Emails




