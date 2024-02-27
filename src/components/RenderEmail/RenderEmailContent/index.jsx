function RenderEmailContent(props) {
  if (props.currentEmail.img !== null) {
    return (
      <div className="content">
        <text>{props.currentEmail.text}</text>
        <img src={props.currentEmail.img} alt="email image" />
      </div>
    );
  } else {
     return (
       <div className="content">
         <text>{props.currentEmail.text}</text>
       </div>
     );   
  }
}

export default RenderEmailContent;
