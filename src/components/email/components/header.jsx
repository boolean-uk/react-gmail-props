import PropTypes from 'prop-types';

import backArrow from '../assets/icons/back-arrow.png'
import rateStarButton from '../assets/icons/rate-star-button.png'
import rubbishButton from '../assets/icons/rubbish-bin-delete-button.png'
import './styles/header.css'

function Header({email}) {
    return (
        <header className="email-content--header">
            <div className="avatar"></div>
            <div className="email-info">
                <div className="sender-info">
                    <h2>{email.sender}</h2>
                    <em>&lt;{email.sender.toLowerCase()}@gmail.com&gt;</em>
                </div>
                <div className="user-info">
                    <p>
                    to me <em>&lt;nicolas@boolean.co.uk&gt;</em>
                    </p>
                </div>
            </div>
            <div className="date-info">
                <p>17 March 2021, 09:33</p>
            </div>
            <div className="email-action-icons">
                <ul>
                    <li >
                        <img className="icon" src={backArrow} alt="reply button" />
                    </li>
                    <li>
                        <img
                            className="icon"
                            src={rateStarButton}
                            alt="star button"
                        />
                    </li>
                    <li>
                        <img
                            className="icon"
                            src={rubbishButton}
                            alt="delete button"
                        />
                    </li>
                </ul>
            </div>
        </header>
  )
}

Header.propTypes = {
    email: PropTypes.object
}

export default Header;