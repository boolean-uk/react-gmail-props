import PropTypes from "prop-types";

function Email(props) {
  return (
    <li className={`email ${props.email.read ? "read" : "unread"}`}>
      <div className="select">
        <input
          className="select-checkbox"
          type="checkbox"
          checked={props.email.read}
          onChange={() => props.toggleRead(props.email)}
        />
      </div>
      <div className="star">
        <input
          className="star-checkbox"
          type="checkbox"
          checked={props.email.starred}
          onChange={() => props.toggleStar(props.email)}
        />
      </div>
      <div className="sender" onClick={() => props.setSelected(props.email)}>
        {props.email.sender}
      </div>
      <div className="title" onClick={() => props.setSelected(props.email)}>
        {props.email.title}
      </div>
    </li>
  );
}

Email.propTypes = {
  email: PropTypes.object,
  toggleRead: PropTypes.func,
  toggleStar: PropTypes.func,
  setSelected: PropTypes.func,
};

export default Email;
