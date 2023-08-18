import './EmailView.css'
function EmailView(props) {
    const mail = props.email[0]
    return(
        <div className="container">
            <div className="top-bar">
                <h1 className="sender">{mail.sender}</h1>
                <h3 className="email">{mail.sender.split(" ").join("")}@hotmail.com</h3>
                <button className="back-button" onClick={() => props.setOpenEmail(0)}>Back</button>
            </div>

            <div className="mail-body">
                <h3>{mail.title}</h3>
            </div>
        </div>
    )
}
export default EmailView