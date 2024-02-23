import PropTypes from 'prop-types';

const SearchBar = ({setSearchQuery}) => {
    const handleInputChange = (e) => {
        setSearchQuery(e.target.value)
    }

    return (        
    <div className="search">
        <input className="search-bar" placeholder="type mail" onChange={(e) => handleInputChange(e)}/>
    </div>
    )
}

SearchBar.propTypes = {
    SearchBar: PropTypes.func,
}

export default SearchBar