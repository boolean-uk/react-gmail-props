
import Emails from "./Emails"

function MainComponent(props) {

  return (
    <main className="emails">

      <Emails
      //emails={props.emails}
      setEmails={props.setEmails}
      filteredEmails={props.filteredEmails}
      />

    </main>
  )
}

export default MainComponent