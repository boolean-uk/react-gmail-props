import Email from "./Email"
export default function Emails(props){
    return(
      <main className="emails">
        <ul>
          {props.filteredEmails.map((email, index) => (
            <Email
                key = {index}
                email = {email}
                toggleStar = {props.toggleStar}
                toggleRead = {props.toggleRead}
            />
          ))}
        </ul>
      </main>
    )
}