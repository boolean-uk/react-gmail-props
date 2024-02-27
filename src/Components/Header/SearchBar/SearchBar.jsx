import PropTypes from 'prop-types';

const SearchBar = ({setSearchQuery}) => {
    const handleInputChange = (e) => {
        setSearchQuery(e.target.value)
    }

    return (        
    <div className="search">
        <input className="search-bar" placeholder="Search by mail sender or title" onChange={(e) => handleInputChange(e)}/>
    </div>
    )
}

SearchBar.propTypes = {
    setSearchQuery: PropTypes.func,
}

export default SearchBar