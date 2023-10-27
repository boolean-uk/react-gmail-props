import Email from "./Email.jsx";

export default function Emails({ hideRead, emails, setEmails, currentTab }) {
    const toggleRead = (targetEmail) => {
        const updatedEmails = (emails) =>
            emails.map((email) =>
                email.id === targetEmail.id ? { ...email, read: !email.read } : email
            );
        setEmails(updatedEmails);
    };
    const toggleStar = (targetEmail) => {
        const updatedEmails = (emails) =>
            emails.map((email) =>
                email.id === targetEmail.id
                    ? { ...email, starred: !email.starred }
                    : email
            );
        setEmails(updatedEmails);
    };

    const getReadEmails = (emails) => emails.filter((email) => !email.read);

    const getStarredEmails = (emails) => emails.filter((email) => email.starred);

    let filteredEmails = emails;
    if (hideRead) filteredEmails = getReadEmails(filteredEmails);

    if (currentTab === "starred")
        filteredEmails = getStarredEmails(filteredEmails);

    return (
        <main className="emails">
            <ul>
                {filteredEmails.map((email, index) => 
                <Email key={'email'+index} email={email} toggleStar={toggleStar} toggleRead={toggleRead}/>)}  
            </ul>
        </main>
    )
}


