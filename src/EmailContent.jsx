// EmailContent.jsx

import PropTypes from "prop-types";

function EmailContent({ content }) {
  return (
    <div className="email-content">
      <p>{content}</p>
    </div>
  );
}

EmailContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default EmailContent;
