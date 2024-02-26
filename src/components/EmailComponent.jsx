
import PropTypes from 'prop-types'; // Import PropTypes

export default function EmailComponent(props) {
    EmailComponent.propTypes = {
        key: PropTypes.object.isRequired,
        email: PropTypes.object.isRequired, 
        toggleRead: PropTypes.func.isRequired,
         toggleStar: PropTypes.func.isRequired
     };

const {email, key, toggleRead, toggleStar } = props
  return (
    <li
        key={key}
        className={`email ${email.read ? 'read' : 'unread'}`}   //classname based on read or not
    >
        <div className='select'>
            <input 
            className='selec-checkbox'
            type="checkbox" 
            checked={email.read}  // This determined if the checkbox is checked or not
            onChange={() => toggleRead(email)}    // This handle toggle, calling toggleRead with email as parameter
            />
        </div>

        <div className="star">
            <input
                className="star-checkbox"
                type="checkbox"
                checked={email.starred}
                onChange={() => toggleStar(email)}
            />
        </div>
        <div className="sender">{email.sender}</div>
        <div className="title">{email.title}</div>
    </li>
  )
}

