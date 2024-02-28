import moreActions from "../../../../assets/icons/more-actions.png";

import deleteEmail from "../../../../assets/icons/delete-email.png";

function BottomRightIcons() {
  return (
    <ul className="bottom-right-icons">
      <li>
        <img className="icon" src={moreActions} alt="more actions" />
      </li>
      <li>
        <img className="icon" src={deleteEmail} alt="delete email" />
      </li>
    </ul>
  );
}

export default BottomRightIcons;
