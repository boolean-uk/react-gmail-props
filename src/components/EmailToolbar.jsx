
import arrowBack from './../assets/icons/arrow-back.png'
import backArrow from './../assets/icons/back-arrow.png'
import downloadButton from './../assets/icons/download-button.png'
import rateStarButton from './../assets/icons/rate-star-button.png'
import rubbishButton from './../assets/icons/rubbish-bin-delete-button.png'
import avatar from './../assets/icons/avatar.jpg'


import './../styles/App.css'
import './../styles/emailToolbar.css'
//import './../styles/emailContent.css'

function emailToolbar(props){




    return(<><nav className="email-toolbar email-content--header">
    <ul>
      <li onClick={()=>props.bckBtn()}>
        <img className="icon" src={arrowBack} alt="reply button" />
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
    </nav></>)
}

export default emailToolbar