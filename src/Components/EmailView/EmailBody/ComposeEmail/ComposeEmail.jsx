import ComposeEmailFooter from './ComposeEmailFooter/ComposeEmailFooter'
import ComposeEmailHeader from "./ComposeEmailHeader/ComposeEmailHeader"
import ComposeEmailText from "./ComposeEmailText/ComposeEmailText"
import PropTypes from "prop-types"
import "./ComposeEmail.css"

const ComposeEmail = ({email}) => {
    return (
        <div className="email-composer">
            <div className="compose-area">
                <ComposeEmailHeader email={email}/>
                <ComposeEmailText/>
                <ComposeEmailFooter/>
            </div>
        </div>
    )   
}

ComposeEmail.propTypes = {
    email: PropTypes.object,
}

export default ComposeEmail