// components
import Email from "../Email";

import "./style.css";

// functions
const getStarredEmails = (emails) => emails.filter((email) => email.starred);

const getReadEmails = (emails) => emails.filter((email) => !email.read);

const Emails = ({
    currentTab,
    hideRead,
    emails,
    setEmails,
    setEmailData,
    search,
}) => {
    let filteredEmails = emails.filter((item) =>
        search === "" ? item : item.sender.toLowerCase().startsWith(search)
    );

    if (hideRead) filteredEmails = getReadEmails(filteredEmails);

    if (currentTab === "starred")
        filteredEmails = getStarredEmails(filteredEmails);

    return (
        <main className="emails">
            <ul>
                {filteredEmails.map((email, index) => (
                    <Email
                        email={email}
                        key={index}
                        setEmails={setEmails}
                        setEmailData={setEmailData}
                    />
                ))}
            </ul>
        </main>
    );
};

export default Emails;
