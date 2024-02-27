import "./styles.css";
import Avatar from "../../../../assets/icons/Avatar.png";
import BackArrow from "../../../../assets/icons/back-arrow.png";
import PopOut from "../../../../assets/icons/pop-out.png";
import TextfieldTools from "../../../../assets/icons/textFieldTools.png";
import RubbishIcon from "../../../../assets/icons/rubbish-bin-delete-button.png";

function EmailReply() {
  return (
    <div className="replyContainer container">
      <div className="leftIcon col-md-1">
        <img src={Avatar} alt="avatarImage"></img>
      </div>
      <div className="replyBox col-md-11">
        <div className="replyBoxHeader">
          <div className="col-md-1">
            <img src={BackArrow} alt="backArrow" />
          </div>
          <div className="headerText">
            <p>Freepik Company(no-reply@freepik.com)</p>
          </div>
          <div className="headerRight">
            <img src={PopOut} alt="Pop-out" />
          </div>
        </div>
        <div className="replyBoxInput">
          <textarea
            className="textField"
            rows="4"
            cols="50"
            placeholder="Write text here"
          ></textarea>
        </div>
        <div className="replyBoxFooter">
          <div>
            <button id="sendButton">Send</button>
          </div>
          <div>
            <img src={TextfieldTools} alt="tools" id="tools" />
          </div>
          <div className="footerRubbishContainer">
            <img src={RubbishIcon} alt="rubbish" id="rubbish" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailReply;
