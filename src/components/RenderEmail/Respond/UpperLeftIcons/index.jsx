import responseTypeButton from "../../../../assets/icons/response-type.png";

function UpperLeftIcons() {
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
          defaultValue="Freepik Company (no-reply@freepik.com)"
        />
      </li>
    </ul>
  );
}

export default UpperLeftIcons;
