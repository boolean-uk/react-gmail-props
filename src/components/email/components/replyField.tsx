import React from 'react'
import './styles/replyField.css'


interface ReplyProps {
    toggleReply: () => void;
}

export function ReplyField({ toggleReply }: ReplyProps) {
    return (
        <div className="reply">
            <textarea className="reply-field" placeholder="Write your response here.." />
            <div>
                <button className="send">Send</button>
                <button onClick={toggleReply}>Discard</button>
            </div>
        </div>
    )
}
            