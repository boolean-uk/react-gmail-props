import PropTypes from "prop-types"

function SearchBar({setSearch}){
    const search = (event) =>{
        setSearch(event.target.value)
    }
    return (
        <div className="search">
        <input className="search-bar" placeholder="Search mail" onChange={(event) => search(event)} />
      </div>
    )
}

SearchBar.propTypes = {
    setSearch: PropTypes.func
}
export default SearchBar