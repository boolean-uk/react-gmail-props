import { DisplayEmail } from "./DisplayEmail"

export const DisplayEmails = ({filteredEmails, toggleRead, toggleStar}) => {
    return (
        <main className="emails">
        <ul>
          {filteredEmails.map((email, index) => (
            <DisplayEmail key={index} index={index} email={email} toggleRead={toggleRead} toggleStar={toggleStar}/>
          ))}
        </ul>
      </main>
    )
}