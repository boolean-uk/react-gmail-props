import PropTypes from "prop-types";

import "./EmailView.css";

import Body from "./EmailViewParts/Body";
import Header from "./EmailViewParts/Header";
import ToolBar from "./EmailViewParts/ToolBar";

function EmailView(props) {
  return (
    <main className="email-view">
      <ToolBar setSelected={props.setSelected} />

      <article className="email-content">
        <div className="title">
          <h1>{props.email.title}</h1>
        </div>

        <Header email={props.email} />

        <Body email={props.email} />
      </article>
    </main>
  );
}

EmailView.propTypes = {
  email: PropTypes.object,
  setSelected: PropTypes.func,
};

export default EmailView;
