
import UnreadEmails from "./UnreadEmails"
import StarredEmails from "./StarredEmails"
import HideRead from "./HideRead"

function InboxList(props) {

    return (
        <ul className="inbox-list">

          <UnreadEmails
          emails={props.emails}
          setCurrentTab={props.setCurrentTab}
          />

          <StarredEmails
          emails={props.emails}
          setCurrentTab={props.setCurrentTab}
          />

          <HideRead
          setHideRead={props.setHideRead}/>

        </ul>
    )
}

export default InboxList