import flaticonWelcomeImage from "../../../assets/images/flaticon-welcome-image.png";
import EmailActions from "./EmailActions";
import EmailContentHeader from "./EmailContentHeader";
import EmailReply from "./EmailReply";
import "./styles.css";

function EmailContent(props) {
  return (
    <article className="email-content">
      <div className="title">
        <h1>{props.title}</h1>
      </div>
      <EmailContentHeader />
      <section className="email-body">
        <div className="content">
          <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
        </div>
      </section>
      <EmailActions />
      <EmailReply />
    </article>
  );
}

export default EmailContent;
