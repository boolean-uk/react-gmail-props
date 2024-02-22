import PropTypes from "prop-types"
import './styles/CurrentEmail.css'

function CurrentEmail({email, setShowEmail}){
    const closeEmail = () => {
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
            <h1 className='current-email-title'>{email.title}</h1>
            <h1 className='current-email-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tincidunt vitae semper quis lectus. Ultrices sagittis orci a scelerisque. Sit amet luctus venenatis lectus magna fringilla urna. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Tempor nec feugiat nisl pretium fusce id velit. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Dictum fusce ut placerat orci nulla pellentesque dignissim. Bibendum est ultricies integer quis auctor elit. Scelerisque varius morbi enim nunc faucibus a pellentesque sit.</h1>>
        </div>


    )
}

CurrentEmail.propTypes = {
    email: PropTypes.object,
    setShowEmail : PropTypes.func
}
export default CurrentEmail
