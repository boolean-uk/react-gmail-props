export default function Email(props) {
    return(
        <li
          key={props.email.id}
          className={`email ${props.email.read ? 'read' : 'unread'}`}
        >
          <div className="select">
            <input
              className="select-checkbox"
              type="checkbox"
              checked={props.email.read}
              onChange={() => toggleRead(email)}
            />
          </div>
          <div className="star">
            <input
              className="star-checkbox"
              type="checkbox"
              checked={props.email.starred}
              onChange={() => toggleStar(email)}
            />
          </div>
          <div className="sender">{props.email.sender}</div>
          <div className="title">{props.email.title}</div>
        </li>
  )
}
