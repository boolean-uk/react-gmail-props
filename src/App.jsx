import { useState } from "react";

import "./styles/App.css";

import initialEmails from "./data/emails";

// components
import Emails from "./components/Emails";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import EmailPage from "./components/EmailPage";

function App() {
    const [emails, setEmails] = useState(initialEmails);
    const [hideRead, setHideRead] = useState(false);
    const [currentTab, setCurrentTab] = useState("inbox");
    const [emailData, setEmailData] = useState("");
    const [search, setSearch] = useState("");

    return (
        <div className="app">
            <Header emails={emails} search={search} setSearch={setSearch} />

            <Navigation
                emails={emails}
                hideRead={hideRead}
                currentTab={currentTab}
                setHideRead={setHideRead}
                setCurrentTab={setCurrentTab}
                setEmailData={setEmailData}
            />

            {!emailData ? (
                <Emails
                    currentTab={currentTab}
                    hideRead={hideRead}
                    emails={emails}
                    setEmails={setEmails}
                    setEmailData={setEmailData}
                    search={search}
                />
            ) : (
                <EmailPage data={emailData} setData={setEmailData} />
            )}
        </div>
    );
}

export default App;
