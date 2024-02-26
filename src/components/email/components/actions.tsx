import './styles/actions.css';
import { useEffect, useState } from 'react';
import { ReplyField } from './replyField';
import React from 'react';

function Actions() {
    const [reply, setReply] = useState(false);
    const toggleReply = () => setReply(!reply)

    return (
        <>
        {reply ? 
            <ReplyField toggleReply={toggleReply} /> : 
            (
                <section className="email-actions">
                    <button onClick={toggleReply}>Reply</button>
                    <button>Forward</button>
                </section>
            )}
        </>
    )
}

export default Actions;