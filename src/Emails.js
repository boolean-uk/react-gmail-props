import "./styles/emails.css";

import EmailComponent from "./EmailComponent";

function Emails(props) {
    return (
        <main className="emails">
            <ul>
                {props.filteredEmails.map((email, index) => (
                    <EmailComponent
                        email={email}
                        index={index}
                        actions={props.actions}
                        searchQuery={props.searchQuery}
                    />
                ))}
            </ul>
        </main>
    );
}

export default Emails;
