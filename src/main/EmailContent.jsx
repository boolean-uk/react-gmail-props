import { useState } from "react";

import '../styles/EmailContent.css'

export default function EmailContent(props) {

  const [replyText, setReplyText] = useState('')

  const handleReplyChange = (e) => {
      setReplyText(e.target.value)
  }

  const handleReplyClick = () => {
      console.log('Reply: ', replyText)
      setReplyText('')
  }

  const handleReturnInboxClick = () => {
    props.setEmails(props.initialEmails)
    props.setSelectedEmail(null)
  }

  return (
    <div className="email-content">
      <div className="email-sender">{props.email.sender}</div>
      <div className="email-title">{props.email.title}</div>
      <div className="email-body">{props.email.body}</div>
      <input
        type="text"
        value={replyText}
        onChange={handleReplyChange}
        placeholder="Type your reply here"
        className="reply-input"
      />
      <button className="send-reply" onClick={handleReplyClick}>
        Send Reply
      </button>
      <button className="return-to-inbox" onClick={handleReturnInboxClick}>Return to Inbox</button>
    </div>
  );
}
