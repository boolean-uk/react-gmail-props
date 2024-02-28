import PropTypes from "prop-types";

import fiftyKmh from "./../assets/images/50kmh.png";

function Body(props) {
  return (
    <article className="email-content">
      <div className="title">
        <h1>{props.email.title}</h1>
      </div>

      <section className="email-body">
        <div className="content">
          <img src={fiftyKmh} alt="fiftyKmh" />
        </div>
      </section>
      <section className="email-actions">
        <button>Reply</button>
        <button>Forward</button>
      </section>
    </article>
  );
}

Body.propTypes = {
  email: PropTypes.object,
};

export default Body;
