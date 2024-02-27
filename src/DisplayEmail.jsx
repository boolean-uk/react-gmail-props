import PropTypes from "prop-types";

import "./styles/DisplayEmail.css";

function DisplayEmail(props) {
  return (
    <div className="display-email">
      <div className="title">
        {props.selectedEmail.title}
        <button
          className="back-button"
          // Want to close displayed email if back button is clicked
          onClick={() => props.setSelectedEmail(null)}
        >
          Return
        </button>
      </div>
      <p className="content">Email content...</p>
    </div>
  );
}

DisplayEmail.propTypes = {
  selectedEmail: PropTypes.object,
  setSelectedEmail: PropTypes.func,
};

export default DisplayEmail;
