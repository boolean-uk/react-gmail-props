import "./style.css";

const Navigation = ({
    emails,
    hideRead,
    currentTab,
    setHideRead,
    setCurrentTab,
    setEmailData,
}) => {
    const unreadEmails = emails.filter((email) => !email.read);
    const starredEmails = emails.filter((email) => email.starred);

    return (
        <nav className="left-menu">
            <ul className="inbox-list">
                <li
                    className={`item ${currentTab === "inbox" ? "active" : ""}`}
                    onClick={() => {
                        setCurrentTab("inbox");
                        setEmailData("");
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
                        setCurrentTab("starred");
                        setEmailData("");
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
                        onChange={(e) => setHideRead(e.target.checked)}
                    />
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
