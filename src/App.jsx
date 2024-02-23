import { useState, useEffect } from 'react';
import initialEmails from './data/emails';
import './styles/App.css';
import Emails from './components/Emails';

const getReadEmails = emails => emails.filter(email => !email.read);
const getStarredEmails = emails => emails.filter(email => email.starred);

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState('inbox');
  const [filteredEmails, setFilteredEmails] = useState([]);

  useEffect(() => {
    let updatedEmails = emails;
    if (hideRead) updatedEmails = getReadEmails(updatedEmails);
    if (currentTab === 'starred') updatedEmails = getStarredEmails(updatedEmails);
    setFilteredEmails(updatedEmails);
  }, [emails, hideRead, currentTab]);

  const toggleRead = targetEmail => {
    const updatedEmails = emails.map(email =>
      email.id === targetEmail.id ? { ...email, read: !email.read } : email
    );
    setEmails(updatedEmails);
  };

  const toggleStar = targetEmail => {
    const updatedEmails = emails.map(email =>
      email.id === targetEmail.id ? { ...email, starred: !email.starred } : email
    );
    setEmails(updatedEmails);
  };

  const searchForContent = (searchTerm) => {
    const filteredEmails = emails.filter(item =>
      Object.values(item).some(value => 
        typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredEmails(filteredEmails);
  };

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    searchForContent(searchTerm);
  }

  return (
    <div className="app">
      <header className="header">
        <div className="left-menu">
          <svg className="menu-icon" focusable="false" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>

          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
            alt="gmail logo"
          />
        </div>
        <div className="search">
          <input className="search-bar" placeholder="Search mail" onChange={handleSearchChange} />
        </div>
      </header>
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className={`item ${currentTab === 'inbox' ? 'active' : ''}`}
            onClick={() => setCurrentTab('inbox')}
          >
            <span className="label">Inbox</span>
            <span className="count">{getReadEmails(emails).length}</span>
          </li>
          <li
            className={`item ${currentTab === 'starred' ? 'active' : ''}`}
            onClick={() => setCurrentTab('starred')}
          >
            <span className="label">Starred</span>
            <span className="count">{getStarredEmails(emails).length}</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={hideRead}
              onChange={e => setHideRead(e.target.checked)}
            />
          </li>
        </ul>
      </nav>
      <Emails filteredEmails={filteredEmails} toggleRead={toggleRead} toggleStar={toggleStar} /> 
    </div>
  );
}

export default App;
