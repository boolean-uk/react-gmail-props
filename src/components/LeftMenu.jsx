import PropTypes from "prop-types"

function LeftMenuComponent({currentTab, setCurrentTab, emails, hideRead, setHideRead}) {
    const unreadEmails = emails.filter(email => !email.read)
    const starredEmails = emails.filter(email => email.starred)

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
} // onChangeFunc, checkedVal, 
//className, 

LeftMenuComponent.propTypes = {
    currentTab: PropTypes.string.isRequired,
    setCurrentTab: PropTypes.func.isRequired,
    hideRead: PropTypes.bool.isRequired, 
    setHideRead: PropTypes.func.isRequired,
    emails: PropTypes.array.isRequired
};


export default LeftMenuComponent