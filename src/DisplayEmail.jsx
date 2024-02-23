{
  /*this function is meant to display a singular email in the section where the emails usually are displayed.
possibly need to send Email data from Email.jsx file*/
}
import PropTypes from "prop-types";
function DisplayEmail(props) {
  console.log(props.emailToDisplay);
  return (
    <>
      {/* email structure from earlier exersise*/}
      <ul>
        <section className="email-body">
          <div className="content">
            <p>This actually works</p>
            <p>From: {props.emailToDisplay.sender}</p>
            <p>Title: {props.emailToDisplay.title}</p>
          </div>
        </section>
        <section className="email-actions">
          <button>Reply</button>
          <button>Forward</button>
          <button onClick={props.closeMyEmail}>Close</button>
        </section>
      </ul>
    </>
  );
}
export default DisplayEmail;
DisplayEmail.propTypes = {
  closeMyEmail: PropTypes.bool,
  emailToDisplay: PropTypes.object,
};
