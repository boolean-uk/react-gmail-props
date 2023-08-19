import React from 'react'
import Emails from '../components/Emails'

function HomePage({ emails, toggleRead, toggleStar, currentTab, hideRead, filteredEmails, openEmail }) {
  return (
    <>
      <main className="emails">
        <Emails
          emails={filteredEmails}
          toggleRead={toggleRead}
          toggleStar={toggleStar}
          openEmail={openEmail}
        />
      </main>
    </>
  );
}

export default HomePage;