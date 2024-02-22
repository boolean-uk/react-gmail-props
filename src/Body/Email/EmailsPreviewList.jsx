import "./EmailPreviewList.css";
import PropType from "prop-types";
import EmailPreviewItem from "./EmailPreviewItem";
import EmailView from "./EmailConent/EmailView";
import { useState } from "react";

export default function EmailsPreviewList({
	filteredEmails,
	toggleRead,
	toggleStar,
}) {
	const [isEmailViewOpen, setIsEmailViewOpen] = useState(false);
	const [selectedEmail, setSelectedEmail] = useState(null);

	const toggleEmailView = (email) => {
		setIsEmailViewOpen(!isEmailViewOpen);
		setSelectedEmail(email);
	};

	return (
		<main className="emails">
			{isEmailViewOpen ? (
				<EmailView
					toggleEmailView={() => toggleEmailView(null)}
					email={selectedEmail}
				/>
			) : (
				<ul>
					{filteredEmails.map((email, index) => (
						<EmailPreviewItem
							key={index}
							email={email}
							toggleRead={toggleRead}
							toggleStar={toggleStar}
							toggleEmailView={() => toggleEmailView(email)}
						/>
					))}
				</ul>
			)}
		</main>
	);
}

EmailsPreviewList.propTypes = {
	filteredEmails: PropType.array,
	toggleRead: PropType.func,
	toggleStar: PropType.func,
};
