import React from 'react'

function Header({ emails, currentTab, setCurrentTab, hideRead, setHideRead, searchQuery, setSearchQuery }) {
  
  return (
    <>
      <header className="header">
        <div className="menu">
          <svg className="menu-icon" focusable="false" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
          <img
            src="https://www.pngkey.com/png/detail/15-150195_gmail-comments-google-mail-logo-black-and-white.png"
            width="25px"
            alt="gmail logo"
          />
        </div>
        <div className="search">
          <input
            className="search-bar"
            type="text"
            placeholder="Search by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        </header>
        <nav className="left-menu">
          <ul className="inbox-list">
            <li
              className={`item ${currentTab === "inbox" ? "active" : ""}`}
              onClick={() => setCurrentTab("inbox")}
            >
              <span className="label">Inbox</span>
              <span className="count">
                {emails.filter((email) => !email.read).length}
              </span>   
            </li>
            <li
              className={`item ${currentTab === "starred" ? "active" : ""}`}
              onClick={() => setCurrentTab("starred")}
            >
              <span className="label">Starred</span>
              <span className="count">
                {emails.filter((email) => !email.read && email.starred).length}
              </span>
            </li>
            <li className="item toggle">
              <label htmlFor="hide-read">Hide read</label>
              <input
                id="hide-read"
                type="checkbox"
                checked={hideRead}
                onChange={() => setHideRead(!hideRead)}
              />
            </li>
          </ul>
        </nav>
    </>
  );
}

export default Header;