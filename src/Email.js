function Email(props) {

  return (
    <li
      key={props.index}
      className={`email ${props.email.read ? 'read' : 'unread'}`}
    >
      <div className="select">
        <input
          className="select-checkbox"
          type="checkbox"
          checked={props.email.read}
          onChange={() => toggleRead(props.toggleRead)}
        />
      </div>
      <div className="star">
        <input
          className="star-checkbox"
          type="checkbox"
          checked={props.email.starred}
          onChange={() => toggleStar(props.toggleStar)}
        />
      </div>
      <div className="sender">{props.email.sender}</div>
      <div className="title">{props.email.title}</div>
    </li>
  )
}
export default Email