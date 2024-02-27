import PropTypes from 'prop-types';

export default function Sidebar({ currentTab, setCurrentTab, unreadEmails, starredEmails, hideRead, setHideRead }) {
  return (
    <nav className="left-menu">
      <ul className="inbox-list">
        <li
          className={`item ${currentTab === 'inbox' ? 'active' : ''}`}
          onClick={() => setCurrentTab('inbox')}
        >
          <span className="label">Inbox</span>
          <span className="count">{unreadEmails.length}</span>
        </li>
        <li
          className={`item ${currentTab === 'starred' ? 'active' : ''}`}
          onClick={() => setCurrentTab('starred')}
        >
          <span className="label">Starred</span>
          <span className="count">{starredEmails.length}</span>
        </li>

        <li 
          className="item toggle"
          onClick={() => setHideRead(!hideRead)}
          >
          <p htmlFor="hide-read">Hide read</p>
          <input
            id="hide-read"
            type="checkbox"
            checked={hideRead}
            onChange={() => {}}
          />
        </li>
      </ul>
    </nav>
  )
}

Sidebar.propTypes = {
  currentTab: PropTypes.string,
  setCurrentTab: PropTypes.func.isRequired,
  unreadEmails: PropTypes.array.isRequired,
  starredEmails: PropTypes.array.isRequired,
  hideRead: PropTypes.bool.isRequired,
  setHideRead: PropTypes.func.isRequired
};