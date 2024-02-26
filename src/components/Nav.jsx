import ProtoType from 'prop-types'
import '../styles/nav.css'
import '../styles/leftMenu.css'



const Nav = (props) => {

    Nav.ProtoType = {
        currentTab: ProtoType.string,
        setCurrentTab: ProtoType.func,
        setHideRead: ProtoType.func,
        hideRead: ProtoType.bool,
        emails: ProtoType.array
    }

    const {currentTab, setCurrentTab,  setHideRead, hideRead, emails} = props ?? {}

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
}

export default Nav;