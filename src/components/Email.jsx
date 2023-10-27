import { useState } from "react"
import EmailContent from "./EmailContent"

function Email(props) {
    let [displayed, setDisplayed] = useState(false)

    if (displayed === false) {
        return(
            <>  
                <li onClick={() => {setDisplayed(displayed = !displayed)
                console.log(displayed, props.email)}}
                    key={props.index}
                    className={`email ${props.email.read ? 'read' : 'unread'}`}
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
            </>
        )
    } else {
        return(
            <>  
                <li onClick={() => {setDisplayed(displayed = !displayed)
                console.log(displayed, props.email)}}
                    key={props.index}
                    className={`email ${props.email.read ? 'read' : 'unread'}`}
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
                <EmailContent email={props.email}/>
            </>
        )


            }
}

export default Email