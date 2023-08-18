// You should have an Email component that is a list item
import Checkbox from "./Checkbox.js"
import Stars from "./Stars.js"
function Email({ email, toggleRead, toggleStar }) {
    return (
      <li className={`email ${email.read ? 'read' : 'unread'}`}>
        <div className="select">
          <Checkbox
            className="select-checkbox"
            checked={email.read}
            onChange={() => toggleRead(email)}
          />
        </div>
        <div className="star">
        <Stars starred={email.starred} toggleStar={() => toggleStar(email)} />
        </div>
        <div className="sender">{email.sender}</div>
        <div className="title">{email.title}</div>
      </li>
    )
  }
  
  export default Email