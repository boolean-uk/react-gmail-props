import PropTypes from 'prop-types';
import '../styles/DisplayEmail.css'
function DisplayEmail({email, closeOpenEmail}){

    return(<article className="email-content">
    <button onClick={() => closeOpenEmail()}> Close </button>
    <div className="title">
      <h1>{email.title}</h1>
    </div>
    <header className="email-content--header">
      <div className="avatar"></div>
      <div className="email-info">
        <div className="sender-info">
          <h2>{email.sender}</h2>
          <em>&lt;no-reply@{email.sender}.com&gt;</em>
        </div>
        <div className="user-info">
          <p>
            to me <em>&lt;nicolas@boolean.co.uk&gt;</em>
          </p>
        </div>
      </div>
      <div className="date-info">
        <p>17 March 2021, 09:33</p>
      </div>
      <div className="email-action-icons">
        <ul>
          <li>
            <p>Reply</p>
          </li>
          <li>
            <img className="icon" src={"rateStarButton"} alt="star button" />
          </li>
          <li>
            <img className="icon" src={"rubbishButton"} alt="delete button" />
          </li>
        </ul>
      </div>
    </header>
    <section className="email-body">
      <div className="content">
        <img src={"flaticonWelcomeImage"} alt="Flaticon welcome message" />
      </div>
    </section>
  </article>)
}

DisplayEmail.propTypes = {
    email: PropTypes.shape({
        read: PropTypes.bool.isRequired,
        starred: PropTypes.bool.isRequired,
        sender: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    closeOpenEmail: PropTypes.func.isRequired,
};

export default DisplayEmail