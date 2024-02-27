
import Select from "./Select"
import Star from "./Star"
import OpenEmail from "./OpenEmail"

function Email(props) {

  return (
    <li
      key={props.index} //ge varje li element ett indexnummer
      className={`email ${props.email.read ? 'read' : 'unread'}`} //email.read=true --> "email read" annars "email unread"
    >

      <Select
        email={props.email}
        setEmails={props.setEmails}
      />

      <Star
        email={props.email}
        setEmails={props.setEmails}
      />

      <div className="sender">{props.email.sender}</div>

      


    </li>
  )
}

export default Email