import PropTypes from 'prop-types';

import downloadButton from '../assets/icons/download-button.png'
import backArrow from '../assets/icons/back-arrow.png'
import rubbishButton from '../assets/icons/rubbish-bin-delete-button.png'
import './styles/toolbar.css'

const Toolbar = ({setShowContent}) => {
    return (
        <nav className="email-toolbar">
          <ul>
            <li>
              <img onClick={() => setShowContent(old => !old)} className="icon" src={backArrow} alt="reply button" />
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

Toolbar.propTypes = {
    setShowContent: PropTypes.func
}

export default Toolbar;