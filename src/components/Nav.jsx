import "../styles/Nav.css"

const Nav = (props) => {
  // eslint-disable-next-line react/prop-types
  const unreadEmails = props.emails.filter(email => !email.read)
  // eslint-disable-next-line react/prop-types
  const starredEmails = props.emails.filter(email => email.starred)

    return (
        <nav className="left-menu">
        <ul className="inbox-list">
          <li
            // eslint-disable-next-line react/prop-types
            className={`item ${props.currentTab === 'inbox' ? 'active' : ''}`}
            // eslint-disable-next-line react/prop-types
            onClick={() => props.setCurrentTab('inbox')}
          >
            <span className="label">Inbox</span>
            <span className="count">{unreadEmails.length}</span>
          </li>
          <li
            // eslint-disable-next-line react/prop-types
            className={`item ${props.currentTab === 'starred' ? 'active' : ''}`}
            // eslint-disable-next-line react/prop-types
            onClick={() => props.setCurrentTab('starred')}
          >
            <span className="label">Starred</span>
            <span className="count">{starredEmails.length}</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              // eslint-disable-next-line react/prop-types
              checked={props.hideRead}
              // eslint-disable-next-line react/prop-types
              onChange={e => props.setHideRead(e.target.checked)}
            />
          </li>
        </ul>
      </nav>
    )
}

export default Nav