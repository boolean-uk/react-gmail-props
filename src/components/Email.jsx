import PropTypes from "prop-types";

function Email(props) {
  return (
    <li
      key={props.index}
      className={`email ${props.email.read ? "read" : "unread"}`}
    >
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
      <div className="sender">{props.email.sender}</div>
      <div className="title" onClick={() => props.selectEmail(props.email.id)}>
        {props.email.title}
      </div>
    </li>
  );
}

Email.propTypes = {
  index: PropTypes.number,
  email: PropTypes.object,
  toggleStar: PropTypes.func,
  toggleRead: PropTypes.func,
  selectEmail: PropTypes.func
};

export default Email;
