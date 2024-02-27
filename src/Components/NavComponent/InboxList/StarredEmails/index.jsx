
function StarredEmails(props) {
  const starredEmails = props.emails.filter(email => email.starred)

  return (
    <li
      className={`item ${props.currentTab === 'starred' ? 'active' : ''}`}
      onClick={() => props.setCurrentTab('starred')}
    >
      <span className="label">Starred</span>
      <span className="count">{starredEmails.length}</span>
    </li>
  )
}

export default StarredEmails