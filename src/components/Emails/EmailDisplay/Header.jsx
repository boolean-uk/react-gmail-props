function HeaderComponent({ email, setSelectedEmail}) {
    return (
        <header className="email-content--header">
            <button className="email-return-button" onClick={() => setSelectedEmail(undefined)}>Back</button>
            <div className="avatar"></div>
            <div className="email-info">
                <div className="sender-info">
                    <h2>{email.sender}</h2>
                    <em>&lt;{email.sender}@gmail.com&gt;</em>
                </div>
                <div className="user-info">
                    <p>
                        to me <em>&lt;you@boolean.co.uk&gt;</em>
                    </p>
                </div>
            </div>
            <div className="date-info">
                <p>17 March 2021, 09:33</p>
            </div>
        </header>
    )
}

export default HeaderComponent