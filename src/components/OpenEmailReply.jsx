import backArrow from '../OpenEmail content/back-arrow.png'
import profilePhoto from '../OpenEmail content/profile-photo.png'
import expandIcon from '../OpenEmail content/expand.svg'
import fontIcon from '../OpenEmail content/font.svg'
import attachIcon from '../OpenEmail content/attach.svg'
import linkIcon from '../OpenEmail content/link.svg'
import emojiIcon from '../OpenEmail content/emoji.svg'
import googleDrive from '../OpenEmail content/google-drive.svg'
import imageIcon from '../OpenEmail content/image.svg'
import lockImage from '../OpenEmail content/lock.svg'
import penImage from '../OpenEmail content/pen.svg'
import rubbishButton from '../OpenEmail content/rubbish-bin-delete-button.png'
import menuDotsImage from '../OpenEmail content/menu-dots.svg'


import '../components/OpenEmailReply.css'

function OpenEmailReply({emailBody}) {

    return (
        <div className="reply-email-container">
            <div className='profile-photo'>
                <img src={profilePhoto} alt="phofile icon" width={40}/>
            </div>
            <div className='reply-email-content'>
                <div className='recipient-info'>
                    <img className='reply-arrow' src={backArrow} alt="reply button" width={15}/>
                    <p>&#9662;</p>
                    <p>{emailBody.sender} (no-reply@{(emailBody.sender.toLowerCase()).replaceAll(" ", "")}.com)</p>
                    <img className='expand-icon' src={expandIcon} alt="expand icon" width={15}/>
                </div>
                <div className='email-reply'>
                    <p>Dear Sirs, <br /> Thank you for your email...
                    </p>
                    <img className='expand-email-menu' src={menuDotsImage} alt="menu dots" width={30}/>
                </div>
                <div className='send-options'>
                    <button className='send-button'>Send</button>
                    <img src={fontIcon} alt="font icon" width={20}/>
                    <img src={attachIcon} alt="font icon" width={20}/>
                    <img src={linkIcon} alt="font icon" width={20}/>
                    <img src={emojiIcon} alt="font icon" width={20}/>
                    <img src={googleDrive} alt="font icon" width={20}/>
                    <img src={imageIcon} alt="font icon" width={20}/>
                    <img src={lockImage} alt="font icon" width={20}/>
                    <img src={penImage} alt="font icon" width={20}/>
                    <div className='extra-options'>
                        <p>&#8285;</p>
                        <img src={rubbishButton} alt="bin" width={15}/>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default OpenEmailReply