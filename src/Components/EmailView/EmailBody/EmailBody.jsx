import PropTypes from 'prop-types';
import LoremIpsum from "./LoremIpsum.js"
import "./EmailBody.css"

// eslint-disable-next-line no-unused-vars
const EmailBody = ({email}) => {
    // This content would be within the email object in a real situation
    const sampleContent = LoremIpsum
    return (
    <section className="email-body">
        <p>{sampleContent}</p>
    </section>
    )
}

EmailBody.propTypes = {
    email: PropTypes.object,
}

export default EmailBody