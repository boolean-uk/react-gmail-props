/* eslint-disable react/prop-types */
import { EmailContent } from "./EmailContent/EmailContent";
import { EmailLine } from "./EmailLine"


export const ContentArea = ({filteredEmails, toggleRead, toggleStar, openEmail, setOpenEmail}) => {
  if (openEmail === -1) {
    return (
      <main className="emails">
        {filteredEmails.map((email, index) => (
          <div key={index} onClick={() => setOpenEmail(index)}>
            <EmailLine
              index={index}
              email={email}
              toggleRead={toggleRead}
              toggleStar={toggleStar}
            />
          </div>
        ))}
      </main>
    );
  }
  else {
    return (
      <main>
        <EmailContent email={filteredEmails[openEmail]} />
      </main>
    )
  }
}