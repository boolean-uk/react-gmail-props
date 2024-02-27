import PropTypes from "prop-types"

import './styles.css'

import profile from '@/assets/profile.png'

import backArrow from '@/assets/back-arrow.png'
import replyOptions from '@/assets/replyoptions.png'
import share from '@/assets/share.png'

import dots from '@/assets/dots.png'

import actions from '@/assets/actions.png'
import dandd from '@/assets/deleteanddots.png'

function EmailResponse({openedEmail}) {
    return (
        <div className="email-response">
            <img className="profile" src={profile} alt="profile" />
            <div className="writing-box">
                <header className="writing-box-header">
                <img className="reply" src={backArrow} alt="reply button" />
                <img className="reply-options" src={replyOptions} alt="reply options" />
                <input className="email-recepient" type="text" placeholder={openedEmail.sender} />
                <img className="share" src={share} alt="share" />
                </header>

                <textarea className="writing-box-textarea"></textarea>

                <img className="writing-box-options" src={dots}></img>

                <div className="writing-box-actions">
                <button className="send-button">Send</button>
                <select className='select-send-button'></select>
                <img className="actions" src={actions} alt="actions" />
                <img className="dand" src={dandd} alt="delete and dots" />
                </div>
            </div>
        </div>
    )
}

EmailResponse.propTypes = {
    openedEmail: PropTypes.object,
}

export default EmailResponse