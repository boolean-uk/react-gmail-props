import "../../styles/Email/Emails.css";
import Email from "./Email";

/* eslint-disable react/prop-types */
const Emails = ({ filteredEmails, toggleRead, toggleStar }) => {
    return (
        <main className="emails">
            <ul>
                {filteredEmails.map((email, index) => (
                    <Email
                        key={index}
                        email={email}
                        toggleRead={toggleRead}
                        toggleStar={toggleStar}
                    />
                ))}
            </ul>
        </main>
    );
};

export default Emails;
