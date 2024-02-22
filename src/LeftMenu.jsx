import "./styles/App.css";
import PropTypes from "prop-types";
function LeftMenu(props) {
  return (
    <>
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className={`item ${props.currentTab === "inbox" ? "active" : ""}`}
            onClick={() => props.setCurrentTab("inbox")}
          >
            <span className="label">Inbox</span>
            <span className="count">{props.unreadEmails.length}</span>
          </li>
          <li
            className={`item ${props.currentTab === "starred" ? "active" : ""}`}
            onClick={() => props.setCurrentTab("starred")}
          >
            <span className="label">Starred</span>
            <span className="count">{props.starredEmails.length}</span>
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
    </>
  );
}
LeftMenu.propTypes = {
  setHideRead: PropTypes.func,
  setCurrentTab: PropTypes.func,
  currentTab: PropTypes.string,
  unreadEmails: PropTypes.array,
  starredEmails: PropTypes.array,
  hideRead: PropTypes.boolean,
};
export default LeftMenu;
