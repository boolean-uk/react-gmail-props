function Starred({starredEmails, currentTab, setCurrentTab}) {
    return (
        <li
            className={`item ${currentTab === 'starred' ? 'active' : ''}`}
            onClick={() => setCurrentTab('starred')}
        >
            <span className="label">Starred</span>
            <span className="count">{starredEmails.length}</span>
        </li>
    )
}

export default Starred