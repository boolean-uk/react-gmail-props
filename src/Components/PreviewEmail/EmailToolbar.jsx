import './styles/EmailToolbar.css'

import backArrow from './assets/icons/back-arrow.png'
import downloadButton from './assets/icons/download-button.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'

export function EmailToolbar({emails, currentEmail, setCurrentEmail}) {
    

    return (
        <>
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
            <p>{currentEmail} of {emails.length}</p>
            <button onClick={()=>{
              currentEmail > 1 ? setCurrentEmail(currentEmail - 1) : null
            }}>&lt;</button>
            <button onClick={()=>{
              currentEmail < emails.length ? setCurrentEmail(currentEmail + 1) : null
            }}>&gt;</button>
          </div>
        </nav>
        </>
    )
}
