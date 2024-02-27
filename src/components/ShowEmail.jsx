import PropTypes from 'prop-types'

import '../styles/ShowEmail.css'

function ShowEmail({ email, selectEmail }) {
  return (
    <div className="email-container">
      <div className="selected-email">
        <button
          id="selected-email-back-button"
          onClick={() => selectEmail(null)}
        >
          Back
        </button>
        <br />
        <br />
        <div id="selected-email-sender">{email.sender}</div>
        <div id="selected-email-title">{email.title}</div>
      </div>
    </div>
  );
}


ShowEmail.propTypes = {
    email: PropTypes.shape({
        sender: PropTypes.string,
        title: PropTypes.string,
    }),
    selectEmail: PropTypes.func,
}

export default ShowEmail
