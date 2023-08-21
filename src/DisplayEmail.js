// component for displaying email
function DisplayEmail({ email, onBack }) {
    return (
      <div>
        <button onClick={onBack}>Back</button>
        <h2>{email.title}</h2>
        <p>From: {email.sender}</p>
        <p>{email.body}</p>
      </div>
    )
  }
  
  export default DisplayEmail