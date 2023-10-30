import backArrow from '../imagesAndSvg/back-arrow.png'
import profilePhoto from '../imagesAndSvg/profile-photo.png'
import expandIcon from '../imagesAndSvg/expand.svg'
import fontIcon from '../imagesAndSvg/font.svg'
import attachIcon from '../imagesAndSvg/attach.svg'
import linkIcon from '../imagesAndSvg/link.svg'
import emojiIcon from '../imagesAndSvg/emoji.svg'
import googleDrive from '../imagesAndSvg/google-drive.svg'
import imageIcon from '../imagesAndSvg/image.svg'
import lockImage from '../imagesAndSvg/lock.svg'
import penImage from '../imagesAndSvg/pen.svg'
import rubbishButton from '../imagesAndSvg/rubbish-bin-delete-button.png'
import menuDotsImage from '../imagesAndSvg/menu-dots.svg'



function OpenEmailReply() {

    return (
        <div className="reply-email-container">
            <div className='profile-photo'>
                <img src={profilePhoto} alt="phofile icon" width={40}/>
            </div>
            <div className='reply-email-content'>
                <div className='recipient-info'>
                    <img className='reply-arrow' src={backArrow} alt="reply button" width={15}/>
                    <p>&#9662;</p>
                    <p>Freepik Company (no-reply@freepik.com)</p>
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