import Email from "./subcomponents/Email"

function Emails({ filteredEmails, toggleRead, toggleStar }) {
    return (
        <main className="emails">
            <ul>
                {/* EMAIL */}
                <Email
                    filteredEmails={filteredEmails}
                    toggleRead={toggleRead}
                    toggleStar={toggleStar}
                />
            </ul>
        </main>
    )
}
export default Emails