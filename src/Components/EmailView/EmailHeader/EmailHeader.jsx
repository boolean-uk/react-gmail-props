import PropTypes from 'prop-types';
import { useState, useEffect } from 'react'
import "./EmailHeader.css"

const EmailHeader = ({email}) => {
    const [data, setData] = useState(email)

    useEffect(() => {
        setData(email)
    }, [email])

    // This would be contained wihtin an actual email
    const emailSendDate = new Date().toLocaleString()
    return (
        <>
        <div className="email-title">
            <h1>{data.title}</h1>
        </div>
        <header className="email-content--header">
            <div className="avatar">
                <img className="avatar" src="https://fer-uig.glitch.me" alt="user-icon"/>
            </div>
            <div className="email-info">
                <div className="sender-info">
                    <h2 style={{display: 'inline'}}>{email.sender}</h2>
                    <em>&lt;{email.sender.replaceAll(" ", "_")}@email.com&gt;</em>
                </div>
            </div>
            <div className="date-info">
                <p>{emailSendDate}</p>
            </div>
        </header>
        </>
    )
}

EmailHeader.propTypes = {
    email: PropTypes.object
}

export default EmailHeader