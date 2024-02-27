function LiStarred(props){
    return(
        <li
          className={`item ${props.currentTab === 'starred' ? 'active' : ''}`}
          onClick={() => props.setCurrentTab('starred')}
        >
          <span className="label">Starred</span>
          <span className="count">{props.starredEmails.length}</span>
        </li>
    )
}
export default LiStarred