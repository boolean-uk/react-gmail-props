import PropTypes from 'prop-types';
import "./EmailTools.css"
import backArrow from '@/assets/icons/back-arrow.png'
import rateStarButton from "@/assets/icons/rate-star-button.png"
import rateStarButtonSelected from "@/assets/icons/rate-star-button_yellow.png"

const EmailTools = ({currentTargetId, setTarget, email, setEmails, emailCount, showDetails}) => {
  const resetEmailTarget = () => {
    showDetails(false)
  }

  const incrementTargetValue = () => {
    if (currentTargetId < emailCount) {
      setTarget(currentTargetId)
    } else {
      setTarget(0)
    }
  }

  const decrementTargetValue = () => {
    if (currentTargetId < 1) {
      setTarget(emailCount)
    } else {
      setTarget(currentTargetId - 2)
    }
  }

  const toggleStar = (targetEmail) => {
    const updatedEmails = emails =>
        emails.map(email =>
        email.id === targetEmail.id
        ? { ...email, starred: !email.starred }
        : email
    )
    setEmails(updatedEmails)
  }

  return (
    <nav className="email-toolbar">
      <ul>
        <li>
          <img 
            className="icon" 
            src={backArrow} 
            alt="reply button" 
            onClick={() => resetEmailTarget()}
          />
          {!email.starred ? (
          <img
            className="icon"
            src={rateStarButton}
            alt="star button"
            onClick={() => toggleStar(email)}
          />) : (
            <img
            className="icon"
            src={rateStarButtonSelected}
            alt="star button"
            onClick={() => toggleStar(email)}
          />)}
        </li>
      </ul>
      <div className="spaceingDiv"></div>
      <div>
        <p>{currentTargetId} of {emailCount}</p>
        <button onClick={() => decrementTargetValue()}>&lt;</button>
        <button onClick={() => incrementTargetValue()}>&gt;</button>
      </div>
    </nav>
  )
}

EmailTools.propTypes = {
  setTarget: PropTypes.func,
  email: PropTypes.object,
  emailCount: PropTypes.number,
  currentTargetId: PropTypes.number,
  setEmails: PropTypes.func,
}

export default EmailTools