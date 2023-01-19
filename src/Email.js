//    - You should have an `Email` component that is a list item
//so this should be the function that only calls the appropriate list? 
//the li itself? 

// function Email(props) {
// console.log("props in the Email component", props)
//     return (

//             <ul>
//                     <li
//                         key={index}
//                         className={`email ${email.read ? 'read' : 'unread'}`}
//                     >
//                         <div className="select">
//                             <input
//                                 className="select-checkbox"
//                                 type="checkbox"
//                                 checked={email.read}
//                                 onChange={() => props.toggleRead(email)}
//                             />
//                         </div>
//                         <div className="star">
//                             <input
//                                 className="star-checkbox"
//                                 type="checkbox"
//                                 checked={email.starred}
//                                 onChange={() => props.toggleStar(email)}
//                             />
//                         </div>
//                         <div className="sender">{email.sender}</div>
//                         <div className="title">{email.title}</div>
//                     </li>
//             </ul>
  
//     )
// }

function Email(props) {
    console.log("this is props in the Emails comp", props)
  return (
      <ul>
        {props.filteredEmails.map((email, index) => (
          <li key={index} className={`email ${email.read ? "read" : "unread"}`}>
            <div className="select">
              <input
                className="select-checkbox"
                type="checkbox"
                checked={email.read}
                onChange={() => props.toggleRead(email)}
              />
            </div>
            <div className="star">
              <input
                className="star-checkbox"
                type="checkbox"
                checked={email.starred}
                onChange={() => props.toggleStar(email)}
              />
            </div>
            <div className="sender">{email.sender}</div>
            <div className="title">{email.title}</div>
          </li>
        ))}
      </ul>
  );
}

export default Email; 