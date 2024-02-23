import "../../styles/Email/EmailDisplay.css";

/* eslint-disable react/prop-types */
const EmailDisplay = ({ email, setEmailDisplayIndex }) => {
    const exitEmailDisplay = () => {
        setEmailDisplayIndex(-1);
    };
    return (
        <article className="email-content">
            <div className="title">
                <h1>{email.title}</h1>
            </div>
            <header className="email-content--header">
                <div className="avatar"></div>
                <div className="email-info">
                    <div className="sender-info">
                        <h2>{email.sender}</h2>
                    </div>
                    <div className="user-info">
                        <p>
                            to me <em>&lt;nicolas@boolean.co.uk&gt;</em>
                        </p>
                    </div>
                </div>
                <div className="email-action-icons">
                    <ul>
                        <li>
                            <button onClick={exitEmailDisplay}>Return</button>
                        </li>
                    </ul>
                </div>
            </header>
            <section className="email-body">
                <div className="content">
                    <p>Message text bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>
                </div>
            </section>
            <section className="email-actions">
                <button>Reply</button>
                <button>Forward</button>
            </section>
        </article>
    );
};

export default EmailDisplay;
