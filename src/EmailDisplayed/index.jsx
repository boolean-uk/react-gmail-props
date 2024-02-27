import EmailContent from './EmailContent'

function EmailDisplayed(props) {
    return(
        <>
        <div className="email-open">
            <EmailContent 
                title={props.title}
                sender={props.sender}
                contents={props.contents}
                email={props.email}
            />
        </div>
        </>
    )
}

export default EmailDisplayed