import PropTypes from "prop-types"

function Email({email, index, toggleRead, toggleStar}){
    //The code in the select and star button runs before the onclick for the whole email
    return(
        <li
        key={index}
        className={`email ${email.read ? 'read' : 'unread'}`}
        onClick={() => {console.log("Open email")}}
      >
        <div className="select" onClick={() => {console.log("Don't open email")}}>
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


Email.propTypes = {
    index : PropTypes.number,
    email: PropTypes.object,
    toggleStar: PropTypes.func,
    toggleRead : PropTypes.func
}


export default Email