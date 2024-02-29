import PropTypes from 'prop-types'
import Email from './Email'


function Emails(props) {
  Emails.propTypes = {
    filteredEmails: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        read: PropTypes.bool,
        starred: PropTypes.bool,
        sender: PropTypes.string,
        title: PropTypes.string,
      })
    ),
    toggleRead: PropTypes.func,
    toggleStar: PropTypes.func
  }


  return (
      <main className="emails">
        <ul>
          {props.filteredEmails.map((email, index) => (
            <Email key={index} email={email} index={index} toggleRead={props.toggleRead} toggleStar={props.toggleStar}/>
          ))}
        </ul>
      </main>
  )
}

export default Emails