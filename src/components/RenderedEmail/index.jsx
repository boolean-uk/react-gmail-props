import PropTypes from "prop-types"
import './styles.css'

import EmailContent from "./components/EmailContent"
import EmailResponse from "./components/EmailResponse"
import EmailHeader from "./components/EmailHeader"

function RenderedEmail({openedEmail, setOpenedEmail}) {
    return (
      <div className="rendered-email">
        <EmailHeader openedEmail={openedEmail} setOpenedEmail={setOpenedEmail}/>
        <EmailContent openedEmail={openedEmail} />
        <EmailResponse openedEmail={openedEmail} />
      </div>
    )
}

RenderedEmail.propTypes = {
    openedEmail: PropTypes.object,
    setOpenedEmail: PropTypes.func,
}

export default RenderedEmail