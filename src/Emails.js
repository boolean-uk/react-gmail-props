import Email from "./Email";

function Emails({ emails, actions }) {

  return (
    <main className="emails">
      <ul>
        {emails.map((e) => (
          <Email email={e} actions={actions} />
        ))}
      </ul>
    </main>
  );
}
export default Emails;