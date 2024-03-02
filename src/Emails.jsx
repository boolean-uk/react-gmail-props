import Email from "./Email"
function Emails(props) {
    const filteredEmails = props.filteredEmails

    return (
        <main className="emails">
            <ul>
            {filteredEmails.map((email, index) => (
                <Email
                    key={index}
                    email={email}
                    toggleRead={props.toggleRead}
                    toggleStar={props.toggleStar}
                />
            ))}
            </ul>
        </main>
        )
}
export default Emails