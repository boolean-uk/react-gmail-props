import PropTypes from "prop-types";

function Email(props) {
  const handleClick = (event) => {
    console.log(`clicked on email from ${event.currentTarget.innerText} `);

    props.openMyEmail(props.email);
  };

  return (
    <li
      onClick={handleClick}
      key={props.key}
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
      <div className="title">{props.email.title}</div>
    </li>
  );
}
Email.propTypes = {
  email: PropTypes.shape({
    id: PropTypes.number,
    sender: PropTypes.string,
    title: PropTypes.string,
    starred: PropTypes.bool,
    read: PropTypes.bool,
  }),
  key: PropTypes.number,
  toggleStar: PropTypes.func,
  toggleRead: PropTypes.func,
  openMyEmail: PropTypes.func,
};

export default Email;
