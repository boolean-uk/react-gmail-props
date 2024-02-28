import textFormat from "../../../../assets/icons/text-format.png";
import attachFile from "../../../../assets/icons/attach-file.png";
import link from "../../../../assets/icons/link.png";
import emoji from "../../../../assets/icons/emoji.png";
import googleDrive from "../../../../assets/icons/google-drive.png";
import image from "../../../../assets/icons/image.png";
import lockTime from "../../../../assets/icons/lock-time.png";
import sign from "../../../../assets/icons/sign.png";
import sendButton from "../../../../assets/icons/send-button.png";

function BottomLeftIcons() {
  return (
    <ul className="bottom-left-icons">
      <li>
        <button type="button" className="send-button">
          <img src={sendButton} alt="Send button" />
        </button>
      </li>
      <li>
        <img className="icon" src={textFormat} alt="text format" />
      </li>
      <li>
        <img className="icon" src={attachFile} alt="attach file" />
      </li>
      <li>
        <img className="icon" src={link} alt="link button" />
      </li>
      <li>
        <img className="icon" src={emoji} alt="emoji button" />
      </li>
      <li>
        <img className="icon" src={googleDrive} alt="google drive button" />
      </li>
      <li>
        <img className="icon" src={image} alt="share image button" />
      </li>
      <li>
        <img className="icon" src={lockTime} alt="lock time" />
      </li>
      <li>
        <img className="icon" src={sign} alt="sign button" />
      </li>
    </ul>
  );
}

export default BottomLeftIcons;
