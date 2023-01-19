// - You should have an `Emails` component that renders a list
//-the one that renders the appropriate list--> use Map
// {filtered}

import Email from './Email.js'


function Emails(props) {
    console.log("this is props in the Emails comp", props)
  return (
    <main className="emails">
      <Email filteredEmails={props.filteredEmails} toggleRead={props.toggleRead} toggleStar={props.toggleStar} />
    </main>
  );
}

export default Emails;