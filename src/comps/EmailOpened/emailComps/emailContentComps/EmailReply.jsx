function EmailReply() {
    return (
        <div className="reply-email">
            <div className="reply-header">
                <div className="sender-info">To: <span>no-reply@freepik.com</span></div>
                <div className="subject">Subject: <span>Re: Welcome to Flaticon</span></div>
            </div>
            <div className="reply-body">
                <textarea placeholder="Write your reply..."></textarea>
            </div>
            <div className="reply-actions">
                <button className="send-btn">Send</button>
                <button className="discard-btn">Discard</button>
            </div>
        </div>
    );
}

export default EmailReply