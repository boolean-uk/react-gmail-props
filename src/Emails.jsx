import Email from "./Email" //Imports Email component
//Renders multiple Email components
import PropTypes from 'prop-types'

function Emails(props){
    const { emails, toggleRead, toggleStar} = props
    return(
        <main className="emails">
            <ul>
                {emails.map((email, index) => 
                    <Email key={index}
                    email={email}
                    toggleRead={toggleRead}
                    toggleStar={toggleStar}/>)}
            </ul>

        </main> 
        
    )
}

Emails.propTypes = {
    emails: PropTypes.arrayOf(PropTypes.object),
    toggleRead: PropTypes.func,
    toggleStar: PropTypes.func
}
    


export default Emails