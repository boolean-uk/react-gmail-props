import Email from "./Email"

function Emails(props) {
    return (props.filteredEmails.map((email, index) => (
        <Email email={email} toggleStar={props.toggleStar} toggleRead={props.toggleRead}/>
      )))
}

export default Emails