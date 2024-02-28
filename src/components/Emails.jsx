
import '../styles/App.css'
import Email from './Email'

function Emails(properties) {
    return(
        <main className="emails">
        <ul>
          {properties.filteredEmails.map((email, index) => (
            <Email key={index} email={email} toggleRead={properties.toggleRead} toggleStar={properties.toggleStar} />
          ))}
        </ul>
      </main>
    )
}
export default Emails