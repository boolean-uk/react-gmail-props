import { useState } from "react";

import initialEmails from "./data/emails";

import Emails from './components/Emails'
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";

import "./styles/App.css";

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);

  const [currentTab, setCurrentTab] = useState("inbox");
  
  return (
    <div className="app">
      <Header></Header>
      <LeftMenu currentTab={currentTab} setCurrentTab={setCurrentTab} emails={emails} hideRead={hideRead} setHideRead={setHideRead}></LeftMenu>
      <Emails currentTab={currentTab} emails ={emails} setEmails={setEmails} hideRead={hideRead} />
    </div>
  );
}

export default App;
