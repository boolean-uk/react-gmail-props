import PropType from "prop-types";
export default function Searchbar({ setSearchTerm }) {
	return (
		<div className="search">
			<input
				className="search-bar"
				placeholder="Search mail"
				onInput={(e) => {
					setSearchTerm(e.target.value);
				}}
			/>
		</div>
	);
}

Searchbar.propTypes = {
	setSearchTerm: PropType.func,
};
