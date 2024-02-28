import '../styles/App.css'

function Email(properties) {
    return(
        <li className={`email ${properties.email.read ? 'read' : 'unread'}`}>
        <div className="select">
        <input
            className="select-checkbox"
            type="checkbox"
            checked={properties.email.read}
            onChange={() => properties.toggleRead(properties.email)}
        />
        </div>
        <div className="star">
        <input
            className="star-checkbox"
            type="checkbox"
            checked={properties.email.starred}
            onChange={() => properties.toggleStar(properties.email)}
        />
        </div>
        <div className="sender">{properties.email.sender}</div>
        <div className="title">{properties.email.title}</div>
        </li>
    )
}
export default Email