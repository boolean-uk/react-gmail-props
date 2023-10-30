import Email from "./Email";

function Emails({
    // eslint-disable-next-line react/prop-types
    filteredEmails,
    // eslint-disable-next-line react/prop-types
    toggleRead,
    // eslint-disable-next-line react/prop-types
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