import PropTypes from "prop-types"

function Email({email, index, toggleRead, toggleStar, setShowEmail}){
    //The code in the select and star button runs before the onclick for the whole email
    const showEmail = () =>{
        if (!email.read) toggleRead(email)
        setShowEmail(email)
    }

    return(
        <li
        key={index}
        className={`email ${email.read ? 'read' : 'unread'}`}
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
        <div className="sender" onClick={(e) => showEmail()}>{email.sender}</div>
        <div className="title" onClick={(e) => showEmail()}>{email.title}</div>
      </li>
    )
}


Email.propTypes = {
    index : PropTypes.number,
    email: PropTypes.object,
    toggleStar: PropTypes.func,
    toggleRead : PropTypes.func,
    setShowEmail : PropTypes.func
}


export default Email