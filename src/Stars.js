// for the stars

function Stars({ starred, toggleStar }) {

    return (
      <div className="star" onClick={toggleStar}>
        {starred ? <span className="star-icon starred">★</span> : <span className="star-icon">☆</span>}
      </div>
    )
  }
  
  export default Stars