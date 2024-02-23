/* eslint-disable react/prop-types */
import backArrow from '../../../assets/back-arrow.png'
import './SelectedEmail.css'

function SelectedEmail(props) {
    return (
        <div className="selected-email">
            <button className="back-button">
                <img 
                    className="back-button-img"
                    src={backArrow}
                    alt="back arrow button"
                    onClick={() => props.setSelectedEmail(null)}
                />
            </button>
            <div className="email-content">
                <h1>{props.email.title}</h1>
                <h4>From: {props.email.sender}</h4>
                <p>This email is empty :(</p>
            </div>
        </div>
    )
}

export default SelectedEmail
