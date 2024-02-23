import "../../styles/Layout/SideMenu.css";

/* eslint-disable react/prop-types */
const SideMenu = ({
    currentTab,
    unreadEmails,
    starredEmails,
    hideRead,
    setCurrentTab,
    setHideRead,
    setEmailDisplayIndex,
}) => {
    return (
        <nav className="left-menu">
            <ul className="inbox-list">
                <li
                    className={`item ${currentTab === "inbox" ? "active" : ""}`}
                    onClick={() => {
                        setEmailDisplayIndex(-1);
                        setCurrentTab("inbox");
                    }}
                >
                    <span className="label">Inbox</span>
                    <span className="count">{unreadEmails.length}</span>
                </li>
                <li
                    className={`item ${
                        currentTab === "starred" ? "active" : ""
                    }`}
                    onClick={() => {
                        setEmailDisplayIndex(-1);
                        setCurrentTab("starred");
                    }}
                >
                    <span className="label">Starred</span>
                    <span className="count">{starredEmails.length}</span>
                </li>

                <li className="item toggle">
                    <label htmlFor="hide-read">Hide read</label>
                    <input
                        id="hide-read"
                        type="checkbox"
                        checked={hideRead}
                        onChange={(e) => {
                            setEmailDisplayIndex(-1);
                            setHideRead(e.target.checked);
                        }}
                    />
                </li>
            </ul>
        </nav>
    );
};

export default SideMenu;
