/* eslint-disable react/prop-types */
import Email from "./email"

export default function Emails({filteredEmails, setEmails}) {
  return(
    <ul>
      {filteredEmails.map((email, index) => <Email key={index} item={email} setEmails={setEmails}/>)}
    </ul>
  )
}