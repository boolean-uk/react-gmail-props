import PropTypes from 'prop-types';
import EmailContent from './EmailContent';

function Email(props) {
    Email.propTypes = {
        email: PropTypes.object,
        setEmails: PropTypes.func,
        setSelected: PropTypes.func,
        selected: PropTypes.number
      }
      const toggleStar = targetEmail => {
        const updatedEmails = emails =>
          emails.map(email =>
            email.id === targetEmail.id
              ? { ...email, starred: !email.starred }
              : email
          )
        props.setEmails(updatedEmails)
      }
    
      const toggleRead = targetEmail => {
        const updatedEmails = emails =>
          emails.map(email =>
            email.id === targetEmail.id ? { ...email, read: !email.read } : email
          )
        props.setEmails(updatedEmails)
      }
      const handleListItemClick = () => {
        // Toggle the selected value
        props.setSelected((prevValue) => (prevValue === props.email.id ? null : props.email.id));
      };
      return (
        <div>
          <li
            onClick={handleListItemClick}
            className={`email ${props.email.read ? 'read' : 'unread'}`}
          >
            <div className="select">
              <input
                className="select-checkbox"
                type="checkbox"
                checked={props.email.read}
                onChange={() => toggleRead(props.email)}
              />
            </div>
            <div className="star">
              <input
                className="star-checkbox"
                type="checkbox"
                checked={props.email.starred}
                onChange={() => toggleStar(props.email)}
              />
            </div>
            <div className="sender">{props.email.sender}</div>
            <div className="title">{props.email.title}</div>
          </li>
          {props.selected && props.selected === props.email.id && (
            <EmailContent email={props.email} />
          )}
        </div>
      );
}

export default Email