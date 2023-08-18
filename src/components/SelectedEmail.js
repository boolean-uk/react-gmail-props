import '../styles/selected-email.css'

function SelectedEmail(props) {
    return (
        <div>
            <div className='selected-email-title-area'>
                <h1 className='selected-email-title'>{props.thisEmail.title}</h1>
                <button className='selected-email-back-button' onClick={() => props.openList()}>Click me to go back!</button>
            </div>
            <div className='selected-email-message-area'>
                <p className='selected-email-message'>{props.thisEmail.message}</p>
            </div>
            <div className='selected-email-actions-area'>
                <p className='selected-email-actions'>Reply</p>
                <p className='selected-email-actions'>Forward</p>
            </div>
        </div>
    );
}

export default SelectedEmail