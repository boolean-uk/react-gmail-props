// side navigation

import Checkbox from "./Checkbox.js"
function Navigation({ currentTab, setCurrentTab, hideRead, setHideRead, unreadEmails, starredEmails }) {
    return (
      <nav className="left-menu">
        <ul className="inbox-list">
          <li className={`item ${currentTab === 'inbox' ? 'active' : ''}`} onClick={() => setCurrentTab('inbox')}>
            <span className="label">Inbox</span>
            <span className="count">{unreadEmails.length}</span>
          </li>
          <li className={`item ${currentTab === 'starred' ? 'active' : ''}`} onClick={() => setCurrentTab('starred')}>
            <span className="label">Starred</span>
            <span className="count">{starredEmails.length}</span>
          </li>
          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <Checkbox id="hide-read" checked={hideRead} onChange={e => setHideRead(e.target.checked)} />
          </li>
        </ul>
      </nav>
    )
  }
  
  export default Navigation