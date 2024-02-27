import "./styles/ViewEmail.css";
import PropTypes from "prop-types";

function EmailViewer({ emailData, setDisplayedEmail }) {
  return (
    <main className="view-email">
      <nav className="header">
        <button name="Go back" onClick={() => setDisplayedEmail(null)}>
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/long-arrow-left-icon.png"
            className="menu-icon"
          ></img>
        </button>
      </nav>
      <div className="content">
        <div className="header">
          <h1 className="title">{emailData.title}</h1>
        </div>
        <nav id="from">
          <div className="menu-icon"><img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/male-icon.png" alt="sender"/></div>
          <p>From: <b>{emailData.sender}</b></p>
        </nav>
        <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur egestas dolor, quis molestie ex suscipit vel. Maecenas quis aliquam felis. Pellentesque placerat massa sit amet imperdiet tempus. Donec dictum bibendum efficitur. Suspendisse ornare massa dui, gravida feugiat orci sollicitudin quis. Phasellus non ex nisi. Integer sed laoreet nunc, nec lobortis nisl. Pellentesque nibh eros, mattis at mi sed, fringilla.</p>
      </div>
    </main>
  );
}

EmailViewer.propTypes = {
  emailData: PropTypes.object,
  setDisplayedEmail: PropTypes.func,
};

export default EmailViewer;
