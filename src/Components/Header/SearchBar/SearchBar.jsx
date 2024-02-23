/* eslint-disable react/prop-types */
import './SearchBar.css'

function SearchBar(props) {
  return (
    <div className="search">
        <input className="search-bar" placeholder="Search mail" onChange={(event) => props.setSearch(event.target.value)} />
    </div>
  )
}

export default SearchBar
