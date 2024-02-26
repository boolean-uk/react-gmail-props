/* eslint-disable react/prop-types */
// import PropTypes from "prop-types";
import "./styles/App.css";
function Email(props) {
  return (
    <>
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
        <div className="sender" onClick={() => props.SetOpen()}>
          {props.email.sender}
        </div>
        <div className="title" onClick={() => props.SetOpen()}>
          {props.email.title}
        </div>
      </li>
    </>
  );
}
// Email.propTypes = {
//   email: PropTypes.objectOf(
//     PropTypes.arrayOf({
//       id: PropTypes.number,
//       sender: PropTypes.string,
//       title: PropTypes.string,
//       starred: PropTypes.boolean,
//       read: PropTypes.boolean,
//     })
//   ),
//   index: PropTypes.number,
//   toggleRead: PropTypes.func,
//   toggleStar: PropTypes.func,
// };
export default Email;
