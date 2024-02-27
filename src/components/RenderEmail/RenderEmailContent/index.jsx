function RenderEmailContent(props) {
  if (props.currentEmail.img !== null) {
    return (
      <div className="content">
        <div>{props.currentEmail.text}</div>
        <img src={props.currentEmail.img} alt="email image" />
      </div>
    );
  } else {
     return (
       <div className="content">
         {props.currentEmail.text}
       </div>
     );   
  }
}

export default RenderEmailContent;
