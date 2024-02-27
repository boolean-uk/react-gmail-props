function LiInbox(props) {
  return (
    <li
      className={`item ${props.currentTab === "inbox" ? "active" : ""}`}
      onClick={() => props.setCurrentTab("inbox")}
    >
      <span className="label">Inbox</span>
      <span className="count">{props.unreadEmails.length}</span>
    </li>
  );
}
export default LiInbox;
