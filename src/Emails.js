import Email from "./Email";

function Emails(props) {
  console.log(props);
  return (
    <main className="emails">
      <ul>
        {props.filteredEmails.map((email, index) => (
          // This is the individual emails <Email>:
          <Email
            email={email}
            key={index}
            toggleRead={props.toggleRead}
            toggleStar={props.toggleStar}
          />
        ))}
      </ul>
    </main>
  );
}

export default Emails;
