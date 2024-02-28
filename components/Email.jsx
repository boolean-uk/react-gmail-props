import ReactModal from 'react-modal'
import { useState } from 'react';
import { EmailBox } from './EmailBox';
import './styles/modal.css'
export default function Email(props){
const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
    return(
        <li
        className={`email ${props.email.read ? 'read' : 'unread'}`}
    //   onClick={openModal}
        >
              <div className="select" >
                <input
                  className="select-checkbox"
                  type="checkbox"
                  checked={props.email.read}
                  onChange={() => props.toggleRead(props.email)}
                  onClick={openModal}
                />
              </div>
            <ReactModal
                    className="reactBox"
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Email Reply"
                    >
                    <EmailBox
                    email = {props.email} />
                    <button onClick={closeModal}>
                        Close
                    </button>
            </ReactModal>
              <div className="star">
                <input
                  className="star-checkbox"
                  type="checkbox"
                  checked={props.email.starred}
                  onChange={() => props.toggleStar(props.email)}
                />
              </div>
              <div className="sender">{props.email.sender}</div>
              <div className="title">{props.email.title}</div>
            </li>
            
    )
}