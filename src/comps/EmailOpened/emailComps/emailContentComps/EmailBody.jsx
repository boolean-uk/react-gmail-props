import PropTypes from 'prop-types'

function EmailBody({body}) {
    return (
      <section className="email-body">
        <div className="content">
          {body /* I have trouble formatting, spent 30 minutes trying. that's too many minutes */}
        </div>
      </section>
    )
}

EmailBody.propTypes = {
  body: PropTypes.string.isRequired
}

export default EmailBody