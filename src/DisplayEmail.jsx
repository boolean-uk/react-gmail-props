{
  /*this function is meant to display a singular email in the section where the emails usually are displayed.
possibly need to send Email data from Email.jsx file*/
}
import PropTypes from "prop-types";
function DisplayEmail(props) {
  return (
    <>
      <p>This actually works</p>
      <div>props.displayData</div>
    </>
  );
}
export default DisplayEmail;
DisplayEmail.propTypes = {
  closeMyEmail: PropTypes.bool,
  displayData: PropTypes.any,
};
