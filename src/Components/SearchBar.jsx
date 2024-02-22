
import PropTypes from 'prop-types';
export default function SearchBar({ searchQuery, setSearchQuery }) {
    return (
        <div className="search">
					<input
						className="search-bar"
						placeholder="Search mail"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
				</div>
    )
}

SearchBar.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
}