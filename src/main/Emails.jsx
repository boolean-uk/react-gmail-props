import Email from './Email.jsx';

export default function Emails(props) {
  return (
    <main className="emails">
      <ul>
        {props.filteredEmails.map((email, index) => (
          <Email
            key={index}
            email={email}
            toggleRead={props.toggleRead}
            toggleStar={props.toggleStar}
          />
        ))}
      </ul>
    </main>
  );
}
