import EmailToolbar from "./EmailToolbar/EmailToolbar";
import EmailContent from "./EmailContent/EmailContent";
import PropType from "prop-types";

export default function EmailView({ toggleEmailView, email }) {
	return (
		<main className="email-view">
			<EmailToolbar toggleEmailView={toggleEmailView} />
			<EmailContent email={email} />
		</main>
	);
}

EmailView.propTypes = {
	toggleEmailView: PropType.func,
	email: PropType.object,
};
