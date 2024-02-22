import PropTypes from "prop-types";

function DisplayEmail(props) {
  const { sender, title, text, toggleReturn } = props;
  return (
    <div>
      <span style={{ display: "inline-block", width: "2px" }}></span>
      <h4>{title}</h4>
      <p style={{ fontWeight: "normal" }}>
        <em>from: {sender}</em>
      </p>
      <span style={{ display: "inline-block", width: "2px" }}></span>
      <p style={{ fontWeight: "normal" }}>{text}</p>
      <button onClick={() => toggleReturn()}>Return</button>
    </div>
  );
}

DisplayEmail.propTypes = {
  sender: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  toggleReturn: PropTypes.func,
};

export default DisplayEmail;
