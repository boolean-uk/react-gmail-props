function Email(props) {
  return (
    <li
      key={props.index}
      className={`email ${props.email.read ? "read" : "unread"}`}
    >
      <div className="select">
        <input
          className="select-checkbox"
          type="checkbox"
          checked={props.email.read}
          onChange={() => props.toggleRead(props.email)}
        />
      </div>
      <div className="star">
        <input
          className="star-checkbox"
          type="checkbox"
          checked={props.email.starred}
          onChange={() => props.toggleStar(props.email)}
        />
      </div>
      <div className="sender">{props.email.sender}</div>
      <div className="title">{props.email.title}</div>
    </li>
  );
}

export default Email;
