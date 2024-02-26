import ProtoType from 'prop-types'
import '../styles/email.css'


const Email = (props) => {

    Email.ProtoType = {
        email: ProtoType.object,
        toggleRead: ProtoType.func,
        toggleStar: ProtoType.func,
        setShowEmail: ProtoType.bool,
        setEmailToShow: ProtoType.func
    }

    const {email, toggleRead, toggleStar, setShowEmail, setEmailToShow} = props ?? {}
    return (
    <li

    className={`email ${email.read ? 'read' : 'unread'}`}
    onClick={() => {
        setEmailToShow(email)
        setShowEmail(true)
    }
    }
  >
    <div className="select">
      <input
        className="select-checkbox"
        type="checkbox"
        checked={email.read}
        onChange={() => toggleRead(email)}
      />
    </div>
    <div className="star">
      <input
        className="star-checkbox"
        type="checkbox"
        checked={email.starred}
        onChange={() => toggleStar(email)}
      />
    </div>
    <div className="sender">{email.sender}</div>
    <div className="title">{email.title}</div>
  </li>
    )
}

export default Email;