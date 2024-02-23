import PropTypes from 'prop-types'

export default function ReadEmail(props){

    const {email, onClick } = props

    return (
        <div className='email-body'>
        <p>{`sender <${email.sender}@something.com>`}</p>
        <a href="#" onClick={onClick} style={{ float: 'right' }}>Back</a>
        <p>{email.title}</p>
      </div>
    )
}

ReadEmail.propTypes = {
    email: PropTypes.shape({
        read: PropTypes.bool.isRequired,
        starred: PropTypes.bool.isRequired,
        sender: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired
}