import EmailContent from '../EmailContent'
import EmailToolbar from '../EmailToolbar'

function EmailView (props) {
    return <main className="email-view">
    <EmailToolbar setCurrentEmail={props.setCurrentEmail}/>
    <EmailContent currentEmail={props.currentEmail}/>
  </main>
}

export default EmailView