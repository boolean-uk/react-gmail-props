import "./EmailPreviewList.css";
import PropType from "prop-types";
import EmailPreviewItem from "./EmailPreviewItem";

export default function EmailsPreviewList({
	filteredEmails,
	toggleRead,
	toggleStar,
}) {
	return (
		<main className="emails">
			<ul>
				{filteredEmails.map((email, index) => (
					<EmailPreviewItem
						key={index}
						email={email}
						toggleRead={toggleRead}
						toggleStar={toggleStar}
					/>
				))}
			</ul>
		</main>
	);
}

EmailsPreviewList.propTypes = {
	filteredEmails: PropType.array,
	toggleRead: PropType.func,
	toggleStar: PropType.func,
};
