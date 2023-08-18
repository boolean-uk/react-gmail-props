import Email from "./Email"

function Emails(props) {
    return(
        <main className="emails">
        <ul>
          {props.filteredEmails.map((email, index) => (
            <Email email={email} index={index} toggleRead={props.toggleRead} toggleStar={props.toggleStar} setOpenEmail={props.setOpenEmail}/>
          ))}
        </ul>
      </main>
    )
}
export default Emails