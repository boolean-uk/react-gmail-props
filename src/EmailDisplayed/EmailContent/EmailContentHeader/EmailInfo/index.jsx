import './style.css'

function EmailInfo(props) {
    return (
        <div className="email-info">
            <div className="sender-info">
                <h2>{props.sender}</h2>
                <em>&lt;{props.email}&gt;</em>
            </div>
            <div className="user-info">
                <p>
                  to me <em>&lt;nicolas@boolean.co.uk&gt;</em>
                </p>
            </div>
        </div>
    )
}

export default EmailInfo;