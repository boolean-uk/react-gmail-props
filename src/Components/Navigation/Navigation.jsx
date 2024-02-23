import PropTypes from 'prop-types';
import "./Navigation.css"

const Navigation = ({currentTab, setCurrentTab, emails, hideRead, setHideRead}) => {
  const unreadEmailsLength = emails.filter(email => !email.read).length
  const starredEmailsLength = emails.filter(email => email.starred).length

  return (
      <nav className="left-menu">
      <ul className="inbox-list">
        <li
          className={`item ${currentTab === 'inbox' ? 'active' : ''}`}
          onClick={() => setCurrentTab('inbox')}
        >
          <span className="label">Inbox</span>
          <span className="count">{unreadEmailsLength}</span>
        </li>
        <li
          className={`item ${currentTab === 'starred' ? 'active' : ''}`}
          onClick={() => setCurrentTab('starred')}
        >
          <span className="label">Starred</span>
          <span className="count">{starredEmailsLength}</span>
        </li>

        <li className="item toggle">
          <label htmlFor="hide-read">Hide read</label>
          <input
            id="hide-read"
            type="checkbox"
            checked={hideRead}
            onChange={e => setHideRead(e.target.checked)}
          />
        </li>
      </ul>
    </nav>
  )
}

Navigation.propTypes = {
    currentTab: PropTypes.string,
    setCurrentTab: PropTypes.func,
    emails: PropTypes.array,
    hideRead: PropTypes.bool,
    setHideRead: PropTypes.func,
}

export default Navigation