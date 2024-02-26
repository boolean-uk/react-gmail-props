import '../styles/SelectedEmail.css'

function SelectedEmail({ email, onClick}) {
    return (
        <div className="selected-email">
            <button className="back-button" onClick={onClick}>Back</button>
            <div className='email-content'>
                <h1>{email.title}</h1>  
                <h3>Sent by: {email.sender}</h3>
                <p>{email.content ?? "No message"}</p>
            </div>
        </div>
    )
}

export default SelectedEmail;