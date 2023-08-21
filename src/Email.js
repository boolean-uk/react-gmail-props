// You should have an Email component that is a list item assesment
import EmailCheckbox from "./EmailCheckbox.js";
import Stars from "./Stars.js"
function Email({ email, toggleRead, toggleStar, onClick }) {

    return (
      <li className={`email ${email.read ? 'read' : 'unread'}`} onClick={onClick}> 
        <div className="select">
          <EmailCheckbox
            isChecked={email.read}
            toggleCheck= {() => toggleRead(email)}
          />
        </div>
        <div className="star">
        <Stars starred={email.starred} 
        toggleStar={(e) =>{e.stopPropagation()
           toggleStar(email)}} />
        </div>
        <div className="sender">{email.sender}</div>
        <div className="title">{email.title}</div>
      </li>
    )
  }
  
  export default Email