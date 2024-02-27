import '../../styles/email/EmailBody.css'
import Prototype from 'prop-types'





const EmailBody = (props) => {

  EmailBody.Prototype = {
    emailToShow: Prototype.object
  }

  const {emailToShow} = props ?? {}

  return(
    <section className="email-body">
    <div className="content">
      {emailToShow.title}
    </div>
  </section>
  ) 
    }

    export default EmailBody;