
import InboxList from "./InboxList"

function NavComponent(props) {

  return (
    <nav className="left-menu">

      <InboxList
      emails={props.emails}
      setCurrentTab={props.setCurrentTab}
      setHideRead={props.setHideRead}
      />

    </nav>
  )
}

export default NavComponent