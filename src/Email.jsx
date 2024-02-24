import PropTypes from "prop-types";
import "./styles/Email.css";

function Email(props) {
  const { email, index, toggleRead, toggleStar, showState } = props;
  const forbiddenElements = ["star-checkbox", "select-checkbox"];

  return (
    <li
      key={index}
      className={`email ${email.read ? "read" : "unread"}`}
      onClick={(e) => {
        if (forbiddenElements.includes(e.target.className)) return;
        showState(email, e);
      }}
    >
      <div className="select">
        <input
          className="select-checkbox"
          type="checkbox"
          checked={email.read}
          onChange={(e) => {
            if (e.currentTarget != e.target) return;
            toggleRead(email);
          }}
        />
      </div>
      <div className="star">
        <input
          className="star-checkbox"
          type="checkbox"
          checked={email.starred}
          onChange={(e) => {
            if (e.currentTarget != e.target) return;
            toggleStar(email);
          }}
        />
      </div>

      <div className="sender">{email.sender}</div>
      <div className="title">{email.title}</div>
    </li>
  );
}

Email.propTypes = {
  email: PropTypes.object,
  index: PropTypes.number,
  toggleRead: PropTypes.func,
  toggleStar: PropTypes.func,
  showState: PropTypes.func,
  toggleReturn: PropTypes.func,
};

export default Email;
