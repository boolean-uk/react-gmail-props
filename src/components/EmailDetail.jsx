import React from 'react';
import PropTypes from 'prop-types';
import '../styles/EmailDetail.css'

export default function EmailDetail({ email }) {
  return (
    <div className="email-detail">
      <h2>{email.title}</h2>
      <p className='sender'>From: {email.sender}</p>
      <p className='content'>{
        email.content.split('\n').map((paragraph, index) => (
          <React.Fragment key={index}>
            {paragraph}
            <br />
          </React.Fragment>)
        )}
      </p>
    </div>
  )
}

EmailDetail.propTypes = {
  email: PropTypes.object.isRequired
};