function EmailDisplayed(props) {
    return(
        <>
        <h1 className="email-title">{props.title}</h1>
        <h3 className="email-sender">{props.sender}</h3>
        <p>This is an email being displayed :) contents?</p>
    </>
    )
}

export default EmailDisplayed