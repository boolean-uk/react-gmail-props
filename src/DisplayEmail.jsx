import PropTypes from 'prop-types'

export default function DisplayEmail({email, setEmails})
{
    const toggleStar = targetEmail =>
    {
        const updatedEmails = emails =>
        emails.map(email =>
            email.id === targetEmail.id
            ? { ...email, starred: !email.starred }
            : email
        )
        setEmails(updatedEmails)
    }

    const GoBack = targetEmail =>
    {
        const updatedEmails = emails =>
        emails.map(email =>
            email.id === targetEmail.id ? { ...email, open: false } : email
        )
        setEmails(updatedEmails)
    }

return (
        <>
            <li
              className={`email ${email.read ? 'read' : 'unread'}`}
            >
              <div className="star">
                <input
                  className="star-checkbox"
                  type="checkbox"
                  checked={email.starred}
                  onChange={() => toggleStar(email)}
                />
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>
              <button onClick={() => GoBack(email)}>Back</button>
            </li>
        </>
    )
}

DisplayEmail.propTypes =
{
    email: PropTypes.object,
    setEmails: PropTypes.func
}