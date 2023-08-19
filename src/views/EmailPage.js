import React from 'react'
import { Button, Space } from 'antd'

function EmailPage({ email, goBack }) {
  
  return (
    <div className="email-page">
      <Space direction='vertical' size="large">
      <Button type="text" style={{borderRadius: '0'}} onClick={goBack}>Back to Inbox</Button>
      <div className="email-content">
        <h2>{email.title}</h2>
        <p>From: {email.sender}</p>
      </div>
      </Space>     
    </div>
  );
}

export default EmailPage;