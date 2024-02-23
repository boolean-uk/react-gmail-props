import { useState } from "react";
import initialEmails from "../data/emails";

function useEmails() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");

  const toggleStar = (targetEmail) => {
    const updatedEmails = emails.map((email) =>
      email.id === targetEmail.id
        ? { ...email, starred: !email.starred }
        : email
    );
    setEmails(updatedEmails);
  };

  const toggleRead = (targetEmail) => {
    const updatedEmails = emails.map((email) =>
      email.id === targetEmail.id ? { ...email, read: !email.read } : email
    );
    setEmails(updatedEmails);
  };

  let filteredEmails = emails;

  if (hideRead) filteredEmails = filteredEmails.filter((email) => !email.read);

  if (currentTab === "starred")
    filteredEmails = filteredEmails.filter((email) => email.starred);

  return {
    emails: filteredEmails,
    hideRead,
    setHideRead,
    currentTab,
    setCurrentTab,
    toggleStar,
    toggleRead,
  };
}

export default useEmails;
