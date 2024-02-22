import PropTypes from "prop-types"
import './styles/CurrentEmail.css'

function CurrentEmail({email, setShowEmail}){
    const closeEmail = () => {
        console.log("Close email")
        setShowEmail(null)

    }

    return(
        <div className="current-email-header">
            <img
                src="https://tse4.mm.bing.net/th?id=OIP.MQ_mO9i7vyN-vVA-gvCymQHaHa&pid=Api"
                alt ="back button"
                onClick={() => closeEmail()}
            />
            <h1>{email.sender}</h1>
        </div>

    )
}

CurrentEmail.propTypes = {
    email: PropTypes.object,
    setShowEmail : PropTypes.func
}
export default CurrentEmail
