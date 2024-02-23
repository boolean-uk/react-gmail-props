import PropTypes from "prop-types";
import InboxList from "./InboxList";
import "../styles/LeftMenu.css";

function LeftMenu({
  currentTab,
  setCurrentTab,
  unreadEmails,
  starredEmails,
  hideRead,
  setHideRead,
}) {
  return (
    <nav className="left-menu">
      <InboxList
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        unreadEmails={unreadEmails}
        starredEmails={starredEmails}
        hideRead={hideRead}
        setHideRead={setHideRead}
      />
    </nav>
  );
}

LeftMenu.propTypes = {
  currentTab: PropTypes.string.isRequired,
  setCurrentTab: PropTypes.func.isRequired,
  unreadEmails: PropTypes.arrayOf(PropTypes.object).isRequired,
  starredEmails: PropTypes.arrayOf(PropTypes.object).isRequired,
  hideRead: PropTypes.bool.isRequired,
  setHideRead: PropTypes.func.isRequired,
};

export default LeftMenu;
