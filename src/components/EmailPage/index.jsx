import "./style.css";

const EmailPage = ({ data, setData }) => {
    return (
        <article className="email-content">
            <button
                className="email-content--button"
                onClick={() => setData("")}
            >
                Back
            </button>
            <header className="email-content--header">
                <div className="avatar"></div>
                <div className="email-info">
                    <div className="sender-info">
                        <h2>{data.sender}</h2>
                        <em>&lt;{data.sender.toLowerCase()}@gmail.com&gt;</em>
                    </div>
                    <div className="user-info">
                        <p>
                            to me <em>&lt;nicolas@boolean.co.uk&gt;</em>
                        </p>
                    </div>
                </div>
                <div className="date-info">
                    <p>17 March 2021, 09:33</p>
                </div>
            </header>

            <div className="email-content--title">
                <h1>{data.title}</h1>
            </div>

            <section className="email-actions">
                <button>Reply</button>
                <button>Forward</button>
            </section>
        </article>
    );
};

export default EmailPage;
