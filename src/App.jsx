import { useState } from "react";

import initialEmails from "./data/emails";

import "./styles/App.css";
import EmailList from "./Components/EmailList";
import LeftNavigationMenu from "./Components/LeftNavigationMenu";
import SearchBar from "./Components/SearchBar";
import LeftMenu from "./Components/LeftMenu";

const getReadEmails = (emails) => emails.filter((email) => !email.read);

const getStarredEmails = (emails) => emails.filter((email) => email.starred);

function App() {
	const [emails, setEmails] = useState(initialEmails);
	const [hideRead, setHideRead] = useState(false);
	const [currentTab, setCurrentTab] = useState("inbox");
	const [searchQuery, setSearchQuery] = useState("");

	const unreadEmails = emails.filter((email) => !email.read);
	const starredEmails = emails.filter((email) => email.starred);

	const toggleStar = (targetEmail) => {
		const updatedEmails = (emails) =>
			emails.map((email) =>
				email.id === targetEmail.id
					? { ...email, starred: !email.starred }
					: email
			);
		setEmails(updatedEmails);
	};

	const toggleRead = (targetEmail) => {
		const updatedEmails = (emails) =>
			emails.map((email) =>
				email.id === targetEmail.id ? { ...email, read: !email.read } : email
			);
		setEmails(updatedEmails);
	};

	let filteredEmails = emails;

	if (hideRead) filteredEmails = getReadEmails(filteredEmails);

	if (currentTab === "starred")
		filteredEmails = getStarredEmails(filteredEmails);

	if (searchQuery) {
		filteredEmails = filteredEmails.filter((email) =>
			email.title.toLowerCase().includes(searchQuery.toLowerCase())
		);
	}

	return (
		<div className="app">
			<header className="header">
      <LeftMenu />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			</header>
			<LeftNavigationMenu
				currentTab={currentTab}
				setCurrentTab={setCurrentTab}
				unreadEmails={unreadEmails}
				starredEmails={starredEmails}
				hideRead={hideRead}
				setHideRead={setHideRead}
			/>
			<EmailList
				emails={filteredEmails}
				toggleRead={toggleRead}
				toggleStar={toggleStar}
			/>
		</div>
	);
}

export default App;
