import "./EmailContent.css";

import PropType from "prop-types";

export default function EmailContent({ email }) {
	return (
		<article className="email-content">
			<div className="title">
				<h1>{email.title}</h1>
			</div>
			<header className="email-content--header">
				<div className="avatar"></div>
				<div className="email-info">
					<div className="sender-info">
						<h2>{email.sender}</h2>
						<em>&lt;{email.senderEmail}&gt;</em>
					</div>
					<div className="user-info">
						<p>
							to me <em>&lt;nicolas@boolean.co.uk&gt;</em>
						</p>
					</div>
				</div>
				<div className="date-info">
					<p>17 March 2021, 09:33</p>
				</div>
			</header>
			<section className="email-body">
				<div className="content">
					<p>{email.content}</p>
				</div>
			</section>
			<section className="email-actions">
				<button>Reply</button>
				<button>Forward</button>
			</section>
		</article>
	);
}

EmailContent.propTypes = {
	email: PropType.object,
};
