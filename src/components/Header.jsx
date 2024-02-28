import '../styles/App.css'

function Header({ onSearch}){
    return(
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
            type="text"
            placeholder="Search for email title"
            onChange={(e) => onSearch(e.target.value)} 
            />
        </div>
      </header>
    )
}
export default Header