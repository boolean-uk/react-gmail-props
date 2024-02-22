import "./EmailToolbar.css";
import downloadButton from "/src/assets/icons/download-button.png";
import backArrow from "/src/assets/icons/back-arrow.png";
import rubbishButton from "/src/assets/icons/rubbish-bin-delete-button.png";
import rateStarButton from "/src/assets/icons/rate-star-button.png";
import PropTypes from "prop-types";

export default function EmailToolbar({ toggleEmailView }) {
	return (
		<nav className="email-toolbar">
			<ul>
				<li onClick={toggleEmailView}>
					<img className="icon" src={backArrow} alt="reply button" />
				</li>
				<li>
					<img className="icon" src={rateStarButton} alt="star button" />
				</li>
				<li>
					<img className="icon" src={downloadButton} alt="archive button" />
				</li>
				<li>
					<img className="icon" src={rubbishButton} alt="delete button" />
				</li>
			</ul>
			<div className="space"></div>
			<div>
				<p>1 of 25</p>
				<button>&lt;</button>
				<button>&gt;</button>
			</div>
		</nav>
	);
}

EmailToolbar.propTypes = {
	toggleEmailView: PropTypes.func,
};
