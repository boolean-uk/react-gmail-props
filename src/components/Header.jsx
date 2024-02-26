import '../styles/App.css'
import PropTypes from 'prop-types';
import { useState } from 'react'



function Header(props) {
  Header.propTypes = {
    emails: PropTypes.array,
    setEmails: PropTypes.func
  }
  //is there a way without saving all the previous emails in memory?
  const [originalEmails] = useState(props.emails);
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    
    if (searchTerm === '') {
      // If search term is empty, revert to the original list
      props.setEmails(originalEmails);
    } else {
      // Filter emails based on the search term
      const filteredEmails = originalEmails.filter((email) =>
        email.title.toLowerCase().includes(searchTerm)
      );
      props.setEmails(filteredEmails);
    }
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
          <input className="search-bar" placeholder="Search mail" onChange={handleSearchChange} />
        </div>
      </header>
  )
}

export default Header