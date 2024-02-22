import Email from "./Email";
import PropTypes from "prop-types";

import { useState } from "react";
import EmailContent from "./EmailContent";

export default function EmailList({ emails, toggleRead, toggleStar }) {
	const [selectedEmail, setSelectedEmail] = useState(null);

	function handleEmailClick(email) {
		setSelectedEmail(email);
	}

	function handleBackClick() {
		setSelectedEmail(null);
	}

	return (
		<main className="emails">
			{selectedEmail ? (
				<EmailContent email={selectedEmail} onBackClick={handleBackClick} />
			) : (
				<ul>
					{emails.map((email, index) => (
						<Email
							key={index}
							email={email}
							toggleRead={toggleRead}
							toggleStar={toggleStar}
							onClick={() => handleEmailClick(email)}
						/>
					))}
				</ul>
			)}
		</main>
	);
}

EmailList.propTypes = {
	emails: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			sender: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			read: PropTypes.bool.isRequired,
			starred: PropTypes.bool.isRequired,
		})
	).isRequired,
	toggleRead: PropTypes.func.isRequired,
	toggleStar: PropTypes.func.isRequired,
};
