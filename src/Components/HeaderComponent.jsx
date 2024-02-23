/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

function HeaderComponent({setCurrentTab, setSearchValue, searchValue}) {
  const updateInputValue = event => {
    setCurrentTab("inbox")
    setSearchValue(event.target.value)
  }

  return (
    <header className="header">
        <div className="left-menu">
          <svg className="menu-icon" focusable="false" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
            alt="gmail logo"
          />
        </div>

        <div className="search">
          <input className="search-bar" placeholder="Search mail" value = {searchValue} onChange={updateInputValue}/>
        </div>
      </header>
  )
}

export default HeaderComponent