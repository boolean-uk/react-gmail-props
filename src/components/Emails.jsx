import Email from "./Email"

function Emails({emails, setEmails, hideRead, currentTab, showEmail, setShowEmail, setEmailBody}) {

    const getReadEmails = emails => emails.filter(email => !email.read)
    const getStarredEmails = emails => emails.filter(email => email.starred)

    let filteredEmails = emails

    if (hideRead) filteredEmails = getReadEmails(filteredEmails)
  
    if (currentTab === 'starred')
      filteredEmails = getStarredEmails(filteredEmails)

    return (
        <main className="emails">
            <ul>
            {filteredEmails.map((email, index) => (
                <Email email={email} key={index} setEmails={setEmails} showEmail={showEmail} setShowEmail={setShowEmail} setEmailBody={setEmailBody} />
            ))}
            </ul>
       </main>
    )
}

export default Emails