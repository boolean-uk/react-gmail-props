
import React from 'react';


const Emails = (props) => {
  const getReadEmails = (emails) => emails.filter((email) => !email.read);
  const getStarredEmails = (emails) => emails.filter((email) => email.starred);

  let filteredEmails = props.emails;

  if (props.hideRead) filteredEmails = getReadEmails(filteredEmails);
  if (props.currentTab === 'starred') filteredEmails = getStarredEmails(filteredEmails);

  const toggleStar = (targetEmail) => {
    const updatedEmails = props.emails.map((email) =>
      email.id === targetEmail.id ? { ...email, starred: !email.starred } : email
    );
    props.setEmails(updatedEmails);
  };

  const toggleRead = (targetEmail) => {
    const updatedEmails = props.emails.map((email) =>
      email.id === targetEmail.id ? { ...email, read: !email.read } : email
    );
    props.setEmails(updatedEmails);
  };

  return (
    <main className="emails">
      <ul>
        {filteredEmails.map((email, index) => (
          <li key={index} >
            <div classNam="select"
            > <input type="checkbox" onChange={() => toggleRead(email)}  className='select-checkbox'/>
            </div>
            <div className='star'>
              <input type="checkbox" onChange={() => toggleStar(email)} className='star-checkbox' />
            </div>
          </li>
        ))}

      </ul>
    </main>
  );
};

export default Emails;
