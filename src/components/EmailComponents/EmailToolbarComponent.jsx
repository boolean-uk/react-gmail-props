import React from 'react'
import './../../styles/email-toolbar.css' 

import downloadButton from './../../assets/icons/download-button.png'
import backArrow from './../../assets/icons/back-arrow.png'
import rubbishButton from './../../assets/icons/rubbish-bin-delete-button.png'


function EmailToolbarComponent({setCurrentTab}) {
  return (
    <nav className="email-toolbar">
      <ul>
        <li>
          <img className="icon" src={backArrow} alt="reply button" onClick={() => {
                // toggleRead(email)
                setCurrentTab("inbox")
              }}/>
        </li>
        <li>
          <img className="icon" src={downloadButton} alt="archive button" />
        </li>
        <li>
          <img className="icon" src={rubbishButton} alt="delete button" />
        </li>
      </ul>
      <div className="space"></div>
      <div>
        <p>1 of 1</p>
        <button>&lt;</button>
        <button>&gt;</button>
      </div>
    </nav>
  )
}

export default EmailToolbarComponent
