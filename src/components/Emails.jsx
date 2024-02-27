import Email from './Email'
import './../styles/Emails.css'

function ListOfEmails(props){

   let filteredEmails= props.filteredEmails? props.filteredEmails:[];
   let setEmails = props.setEmails
    let setActive = props.setActive;
    
    const toggleStar = targetEmail => {
        const updatedEmails = emails =>
          emails.map(email =>
            email.id === targetEmail.id
              ? { ...email, starred: !email.starred }
              : email
          )
       setEmails(updatedEmails)
      }
    
      const toggleRead = targetEmail => {
        const updatedEmails = emails =>
          emails.map(email =>
            email.id === targetEmail.id ? { ...email, read: !email.read } : email
          )
          setEmails(updatedEmails)
      }

      const setStatusRead = targetEmail =>{
            const updatedEmails = emails =>
              emails.map(email =>
                email.id === targetEmail.id ? { ...email, read: true} : email
              )
              setEmails(updatedEmails)
          }
      
    
return(
<main className="emails">
<ul>
  {filteredEmails.map((email, index) => (
    <Email key={index} email={email} id={index} toggleRead={toggleRead} toggleStar={toggleStar} setActive={e=>setActive(e)} setStatusRead={ e => setStatusRead(e)}/>
  ))}
</ul>
</main>
)

}

 export default ListOfEmails