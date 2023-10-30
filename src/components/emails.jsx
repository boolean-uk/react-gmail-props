import Email from "./email"

export default function Emails({filteredEmails, setEmails, emailState}) {
  return(
    <ul>
      {filteredEmails.map((email, index) => (
        <Email
        email={email}
        index={index}
        setEmails={setEmails}
        emailState={emailState}
        />
      ))}
    </ul>
  )
}