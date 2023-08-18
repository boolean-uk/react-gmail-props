function EmailComponent(props) {
    if (
        (props.searchQuery &&
            props.email.title
                .toLowerCase()
                .includes(props.searchQuery.toLowerCase())) ||
        !props.searchQuery
    ) {
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
                        onChange={() => props.actions.toggleRead(props.email)}
                    />
                </div>
                <div className="star">
                    <input
                        className="star-checkbox"
                        type="checkbox"
                        checked={props.email.starred}
                        onChange={() => props.actions.toggleStar(props.email)}
                    />
                </div>
                <div className="sender">{props.email.sender}</div>
                <div
                    className="title"
                    onClick={() => props.actions.handleEmailClick(props.email)}
                >
                    {props.email.title}
                </div>
            </li>
        );
    }
   
}

export default EmailComponent;
