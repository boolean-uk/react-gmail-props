import Email from "./Email";

function Emails({
    filteredEmails,
    toggleRead,
    toggleStar,
}){
    return (
        <main className="emails">
            <Email 
            filteredEmails={filteredEmails}
            toggleRead={toggleRead}
            toggleStar={toggleStar}
             />
        </main>
    )
}

export default Emails;