import PropType from "prop-types";
import "./EmailPreviewItem.css";

export default function EmailPreviewItem({ email, toggleRead, toggleStar }) {
	return (
		<li className={`email ${email.read ? "read" : "unread"}`}>
			<div className="select">
				<input
					className="select-checkbox"
					type="checkbox"
					checked={email.read}
					onChange={() => toggleRead(email)}
				/>
			</div>
			<div className="star">
				<input
					className="star-checkbox"
					type="checkbox"
					checked={email.starred}
					onChange={() => toggleStar(email)}
				/>
			</div>
			<div className="sender">{email.sender}</div>
			<div className="title">{email.title}</div>
		</li>
	);
}

EmailPreviewItem.propTypes = {
	index: PropType.number,
	email: PropType.object,
	toggleRead: PropType.func,
	toggleStar: PropType.func,
};
