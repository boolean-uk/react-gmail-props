
function UnreadEmails(props) {
    const unreadEmails = props.emails.filter(email => !email.read)
    
    return (
        <li
            className={`item ${props.currentTab === 'inbox' ? 'active' : ''}`}
            onClick={() => props.setCurrentTab('inbox')}
          >
            <span className="label">Inbox</span>
            <span className="count">{unreadEmails.length}</span>
          </li>
    )
}

export default UnreadEmails