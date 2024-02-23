import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import Emails from "./components/Emails";
import useEmails from "./hooks/useEmails";
import "./styles/App.css";

function App() {
  const {
    emails,
    hideRead,
    setHideRead,
    currentTab,
    setCurrentTab,
    toggleStar,
    toggleRead,
  } = useEmails();

  const unreadEmails = emails.filter((email) => !email.read);
  const starredEmails = emails.filter((email) => email.starred);

  return (
    <div className="app">
      <Header />
      <LeftMenu
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        unreadEmails={unreadEmails}
        starredEmails={starredEmails}
        hideRead={hideRead}
        setHideRead={setHideRead}
      />
      <Emails emails={emails} toggleStar={toggleStar} toggleRead={toggleRead} />
    </div>
  );
}

export default App;
