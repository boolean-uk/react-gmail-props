// import Emails from "./data/emails";
import Email from "./Email";
function Emails({ emails, actions }) {

  return (
    <main className="emails">
      <ul>
        {/* {filteredEmails.map((email, index) => (  } */}

        {emails.map((e) => (
          <Email email={e} actions={actions} />
        ))}
      </ul>
    </main>
  );
}
export default Emails;
