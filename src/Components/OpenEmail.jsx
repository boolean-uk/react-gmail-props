import React from 'react';
import '../styles/OpenEmail.css'

const OpenEmail = ({email, onClick}) => {
    return (
        <div className='email-container'>
            <h3>From : {email.sender}</h3>
            <h4>{email.title}</h4>
            <p>{email.content}</p>
            <button className='return-button' onClick={onClick}>Return</button>
        </div>
    );
}

export default OpenEmail;
