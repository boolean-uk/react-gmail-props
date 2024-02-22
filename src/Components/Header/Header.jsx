import PropTypes from "prop-types";
import { useState } from "react";

function Header({ setSearchString }) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchString(value);
    setSearchValue(value);
    console.log(value);
  };
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
        <input
          className="search-bar"
          value={searchValue}
          onChange={handleChange}
        />
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  setSearchString: PropTypes.func,
};
