import EmailTitle from './EmailTitle'
import EmailContentHeader from './EmailContentHeader';
import EmailBody from './EmailBody';

function EmailContent(props) {
    return (
        <article className="email-content">
            <EmailTitle title={props.title}/>
            <EmailContentHeader 
                sender={props.sender} 
                email={props.email}
            />
            <EmailBody contents={props.contents}/>
        </article>
    )
}

export default EmailContent;