const Email = (props) => {
  return (
      <li
      // eslint-disable-next-line react/prop-types
      key={props.index}
      // eslint-disable-next-line react/prop-types
      className={`email ${props.email.read ? 'read' : 'unread'}`}
    >
      <div className="select">
        <input
          className="select-checkbox"
          type="checkbox"
          // eslint-disable-next-line react/prop-types
          checked={props.email.read}
          // eslint-disable-next-line react/prop-types
          onChange={() => props.toggleRead(props.email)}
        />
      </div>
      <div className="star">
        <input
          className="star-checkbox"
          type="checkbox"
          // eslint-disable-next-line react/prop-types
          checked={props.email.starred}
          // eslint-disable-next-line react/prop-types
          onChange={() => props.toggleStar(props.email)}
        />
      </div>
      <div className="sender">{props.email.sender}</div>
      <div className="title">{props.email.title}</div>
    </li>
  )
}

export default Email