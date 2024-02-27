import './style.css'

import flaticonWelcomeImage from '../../../assets/images/flaticon-welcome-image.png'

function EmailBody(props) {
    return (
        <section className="email-body">
            <div className="content">
            <p>{props.contents}</p>
            </div>
          </section>
    )
}

export default EmailBody;