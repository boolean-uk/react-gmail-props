function LeftNav({ currentTab, setCurrentTab, unreadEmails }) {
  return (
    <li
      className={`item ${currentTab === 'inbox' ? 'active' : ''}`}
      onClick={() => setCurrentTab('inbox')}
    >
      <span className="label">Inbox</span>
      <span className="count">{unreadEmails.length}</span>
    </li>
  )
}

export default LeftNav