import "./styles.css";
import avatarImage from "../../assets/logo-left-textbox.png";
import downRight from "../../assets/logo-down-right.png";
import logosButton from "../../assets/logos-button-right.png";
import leftDownButton from "../../assets/button.png";
import logoButtonTop from "../../assets/logo-button-top.png";
import logoTopLeft from "../../assets/logo-top-left.png";
import logoTopRight from "../../assets/logo-up-right.png";

function EmailResponseComponent() {
  return (
    <>
      <div className="response-box">
        <img className="response-box-image-left" src={avatarImage}></img>
        <div className="response-box-main">
          <div className="response-box-main-top-div">
            <img className="img5" src={logoTopLeft}></img>
            <div className="email-div">Reply to sender(email.address@org.com)</div>
            <img className="img6" src={logoTopRight}></img>
          </div>
          <textarea className="text-area"></textarea>
          <div className="response-box-main-middle-div">
            <img className="img4" src={logoButtonTop}></img>
          </div>
          <div className="response-box-main-bottom-div">
            <img
              id="clickableImage"
              className="img1"
              src={leftDownButton}
            ></img>
            <img className="img2" src={logosButton}></img>
            <img className="img3" src={downRight}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailResponseComponent;
