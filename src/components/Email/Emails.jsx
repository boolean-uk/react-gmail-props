import "../../styles/Email/Emails.css";
import Email from "./Email";
import EmailDisplay from "./EmailDisplay";

/* eslint-disable react/prop-types */
const Emails = ({
    filteredEmails,
    toggleRead,
    toggleStar,
    emailDisplayIndex,
    setEmailDisplayIndex,
}) => {
    return (
        <main className="emails">
            {emailDisplayIndex === -1 ? (
                <ul>
                    {filteredEmails.map((email, index) => (
                        <Email
                            key={index}
                            email={email}
                            toggleRead={toggleRead}
                            toggleStar={toggleStar}
                            setEmailDisplayIndex={setEmailDisplayIndex}
                        />
                    ))}
                </ul>
            ) : (
                <EmailDisplay
                    email={filteredEmails.find(
                        (x) => x.id === emailDisplayIndex
                    )}
                    setEmailDisplayIndex={setEmailDisplayIndex}
                />
            )}
        </main>
    );
};

export default Emails;
