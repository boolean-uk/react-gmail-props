import { useState } from "react";

import "./styles/App.css";

import initialEmails from "./data/emails";

// components
import Emails from "./components/Emails";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App() {
    const [emails, setEmails] = useState(initialEmails);
    const [hideRead, setHideRead] = useState(false);
    const [currentTab, setCurrentTab] = useState("inbox");

    return (
        <div className="app">
            <Header />

            <Navigation
                emails={emails}
                hideRead={hideRead}
                currentTab={currentTab}
                setHideRead={setHideRead}
                setCurrentTab={setCurrentTab}
            />

            <Emails
                currentTab={currentTab}
                hideRead={hideRead}
                emails={emails}
                setEmails={setEmails}
            />
        </div>
    );
}

export default App;
