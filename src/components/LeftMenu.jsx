import '../styles/App.css'

function LeftMenu(properties){
    return(
        <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className={`item ${properties.currentTab === 'inbox' ? 'active' : ''}`}
            onClick={() => properties.setCurrentTab('inbox')}
          >
            <span className="label">Inbox</span>
            <span className="count">{properties.unreadEmails.length}</span>
          </li>
          <li
            className={`item ${properties.currentTab === 'starred' ? 'active' : ''}`}
            onClick={() => properties.setCurrentTab('starred')}
          >
            <span className="label">Starred</span>
            <span className="count">{properties.starredEmails.length}</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={properties.hideRead}
              onChange={e => properties.setHideRead(e.target.checked)}
            />
          </li>
        </ul>
      </nav>
    )
}
export default LeftMenu