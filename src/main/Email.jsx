export default function Email(props) {
    const handleCheckboxClick = (e) => {
        // Nice way to be able to trigger click event of a DOM without activating click event of parent DOM
        e.stopPropagation();
        props.toggleRead(props.email);
    };
    
    const handleStarClick = (e) => {
      // Nice way to be able to trigger click event of a DOM without activating click event of parent DOM
      e.stopPropagation(); 
      props.toggleStar(props.email);
    };
  
    return (
      <li
        key={props.email.id}
        className={`email ${props.email.read ? "read" : "unread"}`}
        onClick={() => props.onClick(props.email)}
      >
        <div className="select">
          <input
            className="select-checkbox"
            type="checkbox"
            checked={props.email.read}
            // Use wrapped helper function to prevent propagation of click events
            onClick={handleCheckboxClick}
          />
        </div>
        <div className="star">
          <input
            className="star-checkbox"
            type="checkbox"
            checked={props.email.starred}
            // Use wrapped helper function to prevent propagation of click events
            onClick={handleStarClick}
          />
        </div>
        <div className="sender">{props.email.sender}</div>
        <div className="title">{props.email.title}</div>
      </li>
    );
  }
  