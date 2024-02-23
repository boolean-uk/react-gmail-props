import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import ReadEmail from './ReadEmail';

export default function Email(props){

    const [expand, setExpand] = useState(false)
    const {email, index, toggleRead, toggleStar} = props

    const handleChange = () => {
        setExpand(expand => !expand)
    }

    useEffect(() => {
        console.log(expand)
    }, [expand])

    return (
        !expand ? (
        <li
        key={index}
        className={`email ${email.read ? 'read' : 'unread'}`}
      >
        <div className="select">
          <input
            className="select-checkbox"
            type="checkbox"
            checked={email.read}
            onChange={() => toggleRead(email)}
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
        <div className="title" onClick={() => {handleChange()}}>{email.title}</div>
      </li> )
    : ( <ReadEmail email={email} onClick={handleChange} /> )
    )      
}

Email.propTypes = {
    email: PropTypes.shape({
        read: PropTypes.bool.isRequired,
        starred: PropTypes.bool.isRequired,
        sender: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    toggleRead: PropTypes.func.isRequired,
    toggleStar: PropTypes.func.isRequired
};