import "./styles/emailView.css";

function EmailView(props) {
    return (
        <main className="email-view">
            <nav className="email-toolbar">
                <ul>
                    <li>
                        <i
                            className="fas fa-arrow-left"
                            onClick={props.actions.handleBack}
                        ></i>
                    </li>
                </ul>
                <div className="space"></div>
                <div>
                    <p>
                        {props.index + 1} of {props.filteredEmails.length}
                    </p>
                    <button
                        onClick={() => {
                            if (props.index !== 0) {
                                props.actions.handleEmailClick(
                                    props.filteredEmails[props.index - 1]
                                );
                            }
                        }}
                    >
                        &lt;
                    </button>
                    <button
                        onClick={() => {
                            if (
                                props.index !=
                                props.filteredEmails.length - 1
                            ) {
                                props.actions.handleEmailClick(
                                    props.filteredEmails[props.index + 1]
                                );
                            }
                        }}
                    >
                        &gt;
                    </button>
                </div>
            </nav>
            <article className="email-content">
                <div className="titleHeading">
                    <h1>{props.selectedEmail.title}</h1>
                </div>
                <header className="email-content--header">
                    <div className="avatar"></div>
                    <div className="email-info">
                        <div className="sender-info">
                            <h2>{props.selectedEmail.sender}</h2>
                            <em>&lt;{props.selectedEmail.emailAddress}&gt;</em>
                        </div>
                        <div className="user-info">
                            <p>
                                to me <em>&lt;veronika@example.com&gt;</em>
                            </p>
                        </div>
                    </div>
                    <div className="date-info">
                        <p>11 March 2023, 19:33</p>
                    </div>
                </header>
                <section className="email-body">
                    <div className="content">
                        <p>{props.selectedEmail.content}</p>
                        <img
                            src={props.selectedEmail.img}
                            alt="some animals"
                        />
                    </div>
                </section>
            </article>
        </main>
    );
}

export default EmailView;
