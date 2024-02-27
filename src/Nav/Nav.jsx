import LiInbox from "./LiInbox.jsx";
import LiStarred from "./LiStarred.jsx";
import LiHideRead from "./LiHideRead.jsx";

function Nav(props) {
  const unreadEmails = props.emails.filter((email) => !email.read);
  const starredEmails = props.emails.filter((email) => email.starred);

  return (
    <nav className="left-menu">
      <ul className="inbox-list">
        <LiInbox
          currentTab={props.currentTab}
          setCurrentTab={props.setCurrentTab}
          unreadEmails={unreadEmails}
        />

        <LiStarred
          currentTab={props.currentTab}
          setCurrentTab={props.setCurrentTab}
          starredEmails={starredEmails}
        />

        <LiHideRead hideRead={props.hideRead} setHideRead={props.setHideRead} />
      </ul>
    </nav>
  );
}
export default Nav;
