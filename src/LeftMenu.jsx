import PropTypes from "prop-types";

import "./styles/LeftMenu.css";

function LeftMenu(props) {
  const unreadEmails = props.emails.filter((email) => !email.read);
  const starredEmails = props.emails.filter((email) => email.starred);

  return (
    <nav className="left-menu">
      <ul className="inbox-list">
        <li
          className={`item ${props.currentTab === "inbox" ? "active" : ""}`}
          onClick={() => {
            props.setCurrentTab("inbox");
            // Want to close displayed email if clicked
            props.setSelectedEmail(null);
          }}
        >
          <span className="label">Inbox</span>
          <span className="count">{unreadEmails.length}</span>
        </li>
        <li
          className={`item ${props.currentTab === "starred" ? "active" : ""}`}
          onClick={() => {
            props.setCurrentTab("starred");
            // Want to close displayed email if clicked
            props.setSelectedEmail(null);
          }}
        >
          <span className="label">Starred</span>
          <span className="count">{starredEmails.length}</span>
        </li>

        <li className="item toggle">
          <label htmlFor="hide-read">Hide read</label>
          <input
            id="hide-read"
            type="checkbox"
            checked={props.hideRead}
            onChange={(e) => props.setHideRead(e.target.checked)}
          />
        </li>
      </ul>
    </nav>
  );
}

LeftMenu.propTypes = {
  emails: PropTypes.array,
  hideRead: PropTypes.bool,
  setHideRead: PropTypes.func,
  currentTab: PropTypes.string,
  setCurrentTab: PropTypes.func,
  setSelectedEmail: PropTypes.func,
};

export default LeftMenu;
