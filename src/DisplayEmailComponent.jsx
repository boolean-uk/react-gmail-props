/* eslint-disable react/prop-types */

import './styles/Display.css'
function DisplayEmailComponent ({email, onClick}) {
    return (
        <div className='display-email'>
            <h1>{email.title}</h1>
            <div className='display-email-info'>
                <h2>{email.sender}</h2>
                <p>To me, local@gmail.com: </p>
            </div>
            <p className='display-email-body'>{email.body}</p>
            <div className='display-email-buttons'>
            <button onClick={onClick}>Reply</button>
            <button onClick={onClick}>Forward</button>
            <button onClick={onClick}>Close</button>
            </div>
        </div>
    )
}

export default DisplayEmailComponent