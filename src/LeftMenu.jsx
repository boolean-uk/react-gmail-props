import { useState } from 'react'
import PropTypes from "prop-types"



function LeftMenu(props)
{
    const {emails, currentTab, setCurrentTab, hideRead, setHideRead} = props;
    /*Missing parameters:
    currentTab : bool
    setCurrentTab: func

    --email--
    unreadEmails.length
    starredEmails.length

    hideread : bool
    setHideread : func
    */
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

LeftMenu.propTypes = {
    emails : PropTypes.array,
    currentTab : PropTypes.bool,
    setCurrentTab : PropTypes.func,
    hideRead : PropTypes.bool,
    setHideRead : PropTypes.func
}
export default LeftMenu