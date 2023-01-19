//    - You should have an `Email` component that is a list item
//so this should be the function that only calls the appropriate list? 
//the li itself? 

function Email(props) {
const filteredEmails = props.filteredEmails

    return (
        <main className="emails">
            <ul>
                {filteredEmails.map((email, index) => (
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
                        <div className="sender">{email.sender}</div>
                        <div className="title">{email.title}</div>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Email; 