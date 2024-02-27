import Email from './Email'
import PropTypes from 'prop-types'

function Emails(props) {    
  return (
    <ul>
    {props.emails.map((email, index) => (
        <Email 
        key={index}
        email={email}
        toggleRead={props.toggleRead}
        toggleStar={props.toggleStar}
        setShowOpenMail={props.setShowOpenMail}
        ></Email>
    ))}
  </ul>
  )
}


Emails.propTypes = {
    emails: PropTypes.array,
    toggleRead: PropTypes.func,
    toggleStar: PropTypes.func,
    setShowOpenMail: PropTypes.func
}

export default Emails