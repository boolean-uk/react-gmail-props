import Email from "./Email";

function Emails(props) {
    console.log("this is props in the Emails comp", props)
  return (
    <main className="emails">
      <Email filteredEmails={props.filteredEmails} toggleRead={props.toggleRead} toggleStar={props.toggleStar} />
    </main>
  );
}

export default Emails;
