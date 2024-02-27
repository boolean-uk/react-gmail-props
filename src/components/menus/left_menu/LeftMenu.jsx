import "./LeftMenu.css";
import PropTypes from "prop-types";

function LeftMenu({
  currentTab,
  unreadEmailsCount,
  starredEmailsCount,
  hideRead,
  setCurrentTab,
  setHideRead,
}) {
  return (
    <nav className="left-menu">
      <ul className="inbox-list">
        <li
          className={`item ${currentTab === "inbox" ? "active" : ""}`}
          onClick={() => setCurrentTab("inbox")}
        >
          <span className="label">Inbox</span>
          <span className="count">{unreadEmailsCount}</span>
        </li>
        <li
          className={`item ${currentTab === "starred" ? "active" : ""}`}
          onClick={() => setCurrentTab("starred")}
        >
          <span className="label">Starred</span>
          <span className="count">{starredEmailsCount}</span>
        </li>

        <li className="item toggle">
          <label htmlFor="hide-read">Hide read</label>
          <input
            id="hide-read"
            type="checkbox"
            checked={hideRead}
            onChange={(e) => setHideRead(e.target.checked)}
          />
        </li>
      </ul>
    </nav>
  );
}

LeftMenu.propTypes = {
  currentTab: PropTypes.string,
  unreadEmailsCount: PropTypes.number,
  starredEmailsCount: PropTypes.number,
  hideRead: PropTypes.bool,
  setCurrentTab: PropTypes.func,
  setHideRead: PropTypes.func,
};

export default LeftMenu;
