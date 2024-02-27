import backArrow from "../assets/back-arrow.png";
function EmailContent(props) {
  return (
    <div>
      <div>
        <img
          className="icon"
          src={backArrow}
          alt="reply button"
          onClick={() => props.setReadEmail(false)}
        />
      </div>
      <h2>Title: {props.selected.title}</h2>
      <p>Sender: {props.selected.sender}</p>
      <p>{props.selected.content}</p>
    </div>
  );
}
export default EmailContent;
