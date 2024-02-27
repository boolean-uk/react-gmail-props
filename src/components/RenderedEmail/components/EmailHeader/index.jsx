import PropTypes from "prop-types"

import './styles.css'

import profile from '@/assets/profile.png'

import backArrow from '@/assets/back-arrow.png'

function EmailHeader({openedEmail, setOpenedEmail}) {
    return (
        <header className="email-header">
            {/* Closes the opened email */}
            <img  onClick={() => setOpenedEmail(0)} className="back" src={backArrow} alt="go back" />
          <h2>{openedEmail.title}</h2>
          <img className="profile" src={profile} alt="profile" />
          <h2>{openedEmail.sender}</h2>
        </header>
    )
}

EmailHeader.propTypes = {
    openedEmail: PropTypes.object,
    setOpenedEmail: PropTypes.func,
}

export default EmailHeader