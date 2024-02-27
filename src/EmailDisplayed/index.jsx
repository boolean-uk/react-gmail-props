function EmailDisplayed(props) {
    return(
        <>
        <div className="email-open">
            <h1 className="email-title">{props.title}</h1>
            <h3 className="email-sender">{props.sender}</h3>
        </div>
        </>
    )
}

export default EmailDisplayed