import '../../styles/EmailOpened.css'

import EmailToolbar from './emailComps/EmailToolbar'
import EmailContent from './emailComps/EmailContent'

function Email() {
    return (
      <main className="email-view">
        <EmailToolbar />
        <EmailContent />
      </main>
    )
}

export default Email