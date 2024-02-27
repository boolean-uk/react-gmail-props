import Email from './Email'
import './../styles/Emails.css'

function ListOfEmails(props){
    
    const toggleStar = targetEmail => {
        const updatedEmails = emails =>
          emails.map(email =>
            email.id === targetEmail.id
              ? { ...email, starred: !email.starred }
              : email
          )
       props.setEmails(updatedEmails)
      }
    
      const toggleRead = targetEmail => {
        const updatedEmails = emails =>
          emails.map(email =>
            email.id === targetEmail.id ? { ...email, read: !email.read } : email
          )
          props.setEmails(updatedEmails)
      }
    
return(<main className="emails">
<ul>
  {props.filteredEmails.map((email, index) => (
    <Email key={index} email={email} id={index} toggleRead={toggleRead} toggleStar={toggleStar}/>
  ))}
</ul>
</main>
)
 }

 export default ListOfEmails