import Email from './EmailComponent';

function Emails( { filteredEmails, toggleRead, toggleStar} ) {
    return (  
<main className="emails">
        <ul>
          {filteredEmails.map((email, index) => (
            < Email
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