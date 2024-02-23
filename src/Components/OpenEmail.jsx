import React from 'react';

const OpenEmail = ({email, onClick}) => {

    return (
        <div className='email-container'>
            <p>{email.content}</p>
            <button onClick={onClick}>Return</button>
        </div>
    );
}

export default OpenEmail;
