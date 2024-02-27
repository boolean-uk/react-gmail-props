import PropTypes from 'prop-types'

function EmailActions({ toggleReply }) {
    return (
        <section className="email-actions">
            <button onClick={toggleReply}>Reply</button>
            <button>Forward</button>
        </section>
    );
}

EmailActions.propTypes = {
    toggleReply: PropTypes.func.isRequired,
};

export default EmailActions;