import '../../styles/EmailOpened.css'
import PropTypes from 'prop-types'
import EmailToolbar from './emailComps/EmailToolbar'
import EmailContent from './emailComps/EmailContent'

function EmailOpened( { email } ) {
  console.log(email)
    return (
      <main className="email-view">
        <EmailToolbar />
        <EmailContent 
          email = { email }
        /> 
      </main>
    )
}

EmailOpened.propTypes = {
  email: PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    starred: PropTypes.bool.isRequired,
    read: PropTypes.bool.isRequired
  }).isRequired
}
export default EmailOpened