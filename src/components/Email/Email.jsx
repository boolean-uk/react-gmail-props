import "../../styles/Email/Email.css";

/* eslint-disable react/prop-types */
const Email = ({ email, toggleRead, toggleStar, setEmailDisplayIndex }) => {
    const openEmail = () => {
        setEmailDisplayIndex(email.id);
    };

    return (
        <li className={`email ${email.read ? "read" : "unread"}`}>
            <div className="select">
                <input
                    className="select-checkbox"
                    type="checkbox"
                    checked={email.read}
                    onChange={() => toggleRead(email)}
                />
            </div>
            <div className="star">
                <input
                    className="star-checkbox"
                    type="checkbox"
                    checked={email.starred}
                    onChange={() => toggleStar(email)}
                />
            </div>
            <div className="sender">{email.sender}</div>
            <div className="title" onClick={openEmail}>
                {email.title}
            </div>
        </li>
    );
};

export default Email;
