import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'
import EmailsComponent from './components/EmailsComponent'
import HeaderComponent from './components/HeaderComponent';

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  //Extension2
  //State to store seach query
  const [searchQuery, setSearchQuery] = useState('') 
  // Function to handle search action when the search button is clicked
  const handleSearch = (e) => {
    console.log(e.target.value)
    setSearchQuery(e.target.value)
  }
  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  const toggleStar = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
    setEmails(updatedEmails)
  }

  const toggleRead = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    setEmails(updatedEmails)
  }

  //Extension2 
  //Function to filter emails based on the search query

  const filterEmailsBySearch = (e) => {
    return ( 
      e.filter(email => {
      email.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
    }
      
    ))
  }

  




  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

    const text = filteredEmails.filter((email) => {
      return (
        email.title
          .toLocaleLowerCase()
          .indexOf(searchQuery.toLocaleLowerCase()) !== -1
      );
    });

    if (searchQuery) filteredEmails = text // Apply search filter  


  return (
    <div className="app">
      {/* Render HeaderComponent with handleSearch prop */}
      <HeaderComponent handleSearch={handleSearch}/>
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className={`item ${currentTab === 'inbox' ? 'active' : ''}`}
            onClick={() => setCurrentTab('inbox')}
          >
            <span className="label">Inbox</span>
            <span className="count">{unreadEmails.length}</span>
          </li>
          <li
            className={`item ${currentTab === 'starred' ? 'active' : ''}`}
            onClick={() => setCurrentTab('starred')}
          >
            <span className="label">Starred</span>
            <span className="count">{starredEmails.length}</span>
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
      {/* Render EmailsComponent with filteredEmails */}
      <EmailsComponent filteredEmails ={filteredEmails} toggleStar={toggleStar} toggleRead={toggleRead} />
      
    </div>
  )
}

export default App
