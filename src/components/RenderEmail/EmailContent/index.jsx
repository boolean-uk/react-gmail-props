import "./index.css";

import EmailActionIcons from "../EmailActionIcons";
import EmailRespond from "../Respond";

function EmailContent(props) {
  
  return (
    <article className="email-content">
      <div className="title">
        <h1>{props.currentEmail.title}</h1>
      </div>
      <header className="email-content--header">
        <div className="avatar"></div>
        <div className="email-info">
          <div className="sender-info">
            <h2>{props.currentEmail.sender}</h2>
            <em>&lt;{props.currentEmail.email}&gt;</em>
          </div>
          <div className="user-info">
            <p>
              to me <em>&lt;nicolas@boolean.co.uk&gt;</em>
            </p>
          </div>
        </div>
        <div className="date-info">
          <p>17 March 2021, 09:33</p>
        </div>
        <EmailActionIcons />
      </header>
      <section className="email-body">
      <div className="content">
        <div>{props.currentEmail.text}</div>
        {props.currentEmail.img !== null && (<img src={props.currentEmail.img} alt="email image" />)}
      </div>      </section>
      <section className="email-actions">
        <button>Reply</button>
        <button>Forward</button>
      </section>
      <EmailRespond currentEmail={props.currentEmail }/>
    </article>
  );
}

export default EmailContent;



