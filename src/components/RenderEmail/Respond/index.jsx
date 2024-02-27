import "./index.css";

import BottomLeftIcons from "./BottomLeftIcons";
import UpperLeftIcons from "./UpperLeftIcons";
import BottomRightIcons from "./BottomRightIcons";
import UpperRightIcons from "./UpperRightIcons";

import avatar from "../../../assets/icons/avatar.png";
import seeMore from "../../../assets/icons/see-more.png";

function EmailRespond() {
  return (
    <article className="email-respond">
      <div>
        <img src={avatar} className="avatar-icon" />
        <div className="respond-container">
          <textarea className="text-box"></textarea>
          <UpperLeftIcons />
          <UpperRightIcons />
          <BottomLeftIcons />
          <BottomRightIcons />
          <img
            className="icon see-more"
            src={seeMore}
            alt="see more of the content"
          />
        </div>
        <section className="email-body"></section>
        <section className="email-actions"></section>
      </div>
    </article>
  );
}

export default EmailRespond;
