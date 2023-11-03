import Unread from './Unread';
import Starred from './Starred';
import ItemToggle from './ItemToggle';

function LeftNav ({ currentTab, setCurrentTab, unreadEmails, starredEmails, hideRead, setHideRead}) {
    return (
        <ul className="inbox-list">
            <Unread 
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            unreadEmails={unreadEmails}
            />
            <Starred 
            starredEmails={starredEmails}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            />
            <ItemToggle 
            hideRead={hideRead}
            setHideRead={setHideRead}
            />
        </ul>
    )
}

export default LeftNav;