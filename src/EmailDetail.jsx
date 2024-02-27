

export default function EmailDetail({selectedEmail, handleBack}) {
    return <>
    <div className="email-detail">
        <button onClick={() => handleBack()}>Return to inbox</button>
        <h2>{selectedEmail.title}</h2>
        <p>{selectedEmail.sender}</p>
        <p>{selectedEmail.body}</p>
    </div>
    </>
}