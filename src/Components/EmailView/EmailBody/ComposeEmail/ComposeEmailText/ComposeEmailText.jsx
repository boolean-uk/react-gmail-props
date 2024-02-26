import { useState } from "react"
import "./ComposeEmailText.css"

const ComposeEmailText = () => {
    // eslint-disable-next-line no-unused-vars
    const [text, setText] = useState('')
    return (
        <div className="email-text-container">
            <textarea placeholder={text}></textarea>
        </div>
    )
}

export default ComposeEmailText