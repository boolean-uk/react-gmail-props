
import Email from "./Email"

function Emails(props) {

    return (
        <ul>
        {props.filteredEmails.map((email, index) => ( //email=item:et i listan, index=dess index

          <Email
          key={index}
          email={email}
          setEmails={props.setEmails}
          />

        ))}
      </ul>
    )
}

export default Emails