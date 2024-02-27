import PropTypes from 'prop-types'

function EmailTitle( {title} ) {
    return (
        <div className="title">
        <h1>{title}</h1>
      </div>
    )
}

EmailTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default EmailTitle