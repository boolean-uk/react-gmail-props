import './style.css'

import DateInfo from './DateInfo'
import EmailInfo from './EmailInfo'
import EmailActionIcons from './EmailActionIcons';

function EmailContentHeader(props) {
    return (
        <header className="email-content--header">
            <div className="avatar"></div>
            <EmailInfo 
                sender={props.sender}
                email={props.email}
            />
            <DateInfo />
            <EmailActionIcons />
          </header>
    )
}

export default EmailContentHeader;