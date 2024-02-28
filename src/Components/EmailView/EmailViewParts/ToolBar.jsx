import PropTypes from "prop-types";

import backArrow from "./../assets/icons/back-arrow.png";

function ToolBar(props) {
  return (
    <nav className="email-toolbar">
      <ul onClick={() => props.setSelected(null)}>
        <img className="icon" src={backArrow} alt="reply button" />
      </ul>
    </nav>
  );
}

ToolBar.propTypes = {
  setSelected: PropTypes.func,
};

export default ToolBar;
