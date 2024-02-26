import PropTypes from 'prop-types';
import LoremIpsum from "./LoremIpsum.js"
import ComposeEmail from "./ComposeEmail/ComposeEmail.jsx"
import "./EmailBody.css"

const EmailBody = ({email}) => {
    // This content would be within the email object in a real situation
    const sampleContent = LoremIpsum
    return (
        <>
        <section className="email-body">
            <p>{sampleContent}</p>
        </section>
        <ComposeEmail email={email}/>
        </>
    )
}

EmailBody.propTypes = {
    email: PropTypes.object,
}

export default EmailBody