import Email from "./Email"

function Inbox(properties) {
    return (
        <main className="emails">
        <ul>
          {properties.mails.map((email, index) => (
            <Email key={index} email={email} toggleStar={properties.toggleStar} toggleRead={properties.toggleRead} /> 
          ))}
        </ul>
      </main>
    )
}

export default Inbox
