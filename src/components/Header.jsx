import '../styles/header.css'
import '../styles/leftMenu.css'
import Prototype from 'prop-types'

const Header = (props) => {

  Header.Prototype = {
    emails: Prototype.array,
    setEmails: Prototype.func,
    initialEmails: Prototype.array,
    currentTab: Prototype.string,
    hideRead: Prototype.bool
  }

  const {setEmails, initialEmails} = props ?? {}


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
          <input className="search-bar" placeholder="Search mail" 
          onChange={(e) => {
            
            const updatedEmails = initialEmails.filter(email => email.title.toLowerCase().includes(e.target.value.toLowerCase()))
            setEmails(updatedEmails)
          }
          }/>

        </div>
      </header>
    )
}

export default Header