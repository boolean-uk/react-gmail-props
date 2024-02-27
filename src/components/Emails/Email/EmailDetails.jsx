import React from 'react';
import './EmailDetails.css'
import backArrow from '../../../assets/back-arrow.png'
function SelectedEmail(props) {
  return (
    <div className='selected-email'>
      <button className='back-to-inbox'>
        <img 
          className='back-button-img'
          src={backArrow}
          alt='back arrow button'
          onClick={() => props.setSelectedEmail(null)}
          />
      </button>
      <div className='email-content'>
        <h2>{props.email.title}</h2>
        <p>From: {props.email.sender}</p>
        <p>{props.email.body}</p>
      </div>
    </div>
  );
}

export default SelectedEmail;
