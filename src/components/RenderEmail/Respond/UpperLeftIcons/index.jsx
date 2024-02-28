import responseTypeButton from "../../../../assets/icons/response-type.png";

function UpperLeftIcons(props) {
  let defaultValue = `${props.currentEmail.sender} (${props.currentEmail.email})`;
  return (
    <ul className="upper-left-icons">
      <li>
        <button type="button" className="response-type-button">
          <img src={responseTypeButton} alt="Response type button" />
        </button>
      </li>
      <li>
        <input
          type="text"
          className="send-to"
          defaultValue={defaultValue}
        />
      </li>
    </ul>
  );
}

export default UpperLeftIcons;
