/* eslint-disable react/prop-types */
import '/src/styles/ContentArea/EmailContent/EmailContent.css'

import { Header } from "./Header";

export const EmailContent = ({email}) => {
  return (
    <article className="email-content">
      <div className={"title"}>
        <h1>{email.title}</h1>
      </div>
      <Header email={email}/>
      <section className="email-body">
        <div className="content">
          <p>{email.content}</p>
        </div>
      </section>
    </article>
  );
};
