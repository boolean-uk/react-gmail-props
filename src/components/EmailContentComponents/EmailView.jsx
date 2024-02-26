import React from 'react'
import backArrow from '../../assets/icons/back-arrow.png'
import downloadButton from '../..//assets/icons/download-button.png'
import rubbishButton from '../..//assets/icons/rubbish-bin-delete-button.png'
import '../../styles/email/EmailView.css'




class EmailView extends React.Component {
    render() {
      return(
        <nav className="email-toolbar">
          <ul>
            <li>
              <img className="icon" src={backArrow} alt="reply button" />
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
            <p>1 of 25</p>
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </nav>
      ) 
      
      }
    }

    export default EmailView;