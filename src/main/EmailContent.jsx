export default function EmailContent(props) {
  return (
    <div className="email-content">
      <div className="email-sender">{props.email.sender}</div>
      <div className="email-title">{props.email.title}</div>
      <div className="email-body">{props.email.body}</div>
    </div>
  );
}
