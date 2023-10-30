import Emails from '../components/Emails.css'

function Emails({ emails, hideRead, currentTab, toggleRead, toggleStar }) {
  let filteredEmails = emails;

  if (hideRead) filteredEmails = filteredEmails.filter(email => !email.read);

  if (currentTab === 'starred') {
    filteredEmails = filteredEmails.filter(email => email.starred);
  }

  return (
    <main className="emails">
      <ul>
        {filteredEmails.map((email, index) => (
          <Email
            key={index}
            email={email}
            toggleRead={toggleRead}
            toggleStar={toggleStar}
          />
        ))}
      </ul>
    </main>
  );
}

export default Emails;
