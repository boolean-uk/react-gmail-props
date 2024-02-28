
function DisplayedEmail(props) {

  return(
    <main>
      
      <div>
        <button onClick={() => props.setSelectedEmail('')}>back</button>
        <h2>{props.selectedEmail.title}</h2>
        <span>{props.selectedEmail.sender}</span>
      </div>
      <hr></hr>
      <div>
        <p>This is the body of an E-Mail (Actual Magic!)</p>

      </div>
    </main>
  )
}

export default DisplayedEmail;