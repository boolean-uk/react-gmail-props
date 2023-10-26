import Email from "./Email"

function Emails(props) {
    console.log("Emails props:", props)
    return <main className="emails">
        <ul>
          {props.filteredEmails.map((email, index) => <Email email={email} index={index} toggleRead={props.toggleRead} toggleStar={props.toggleStar}/>
          )}
        </ul>
      </main>
}

export default Emails