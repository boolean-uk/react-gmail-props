function Email({
    // eslint-disable-next-line react/prop-types
    filteredEmails,
    // eslint-disable-next-line react/prop-types
    toggleRead,
    // eslint-disable-next-line react/prop-types
    toggleStar
}) {
   
    return (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <ul>
        // eslint-disable-next-line react/prop-types, react/prop-types, react/prop-types, react/prop-types
        {filteredEmails.map((email) => (
          // eslint-disable-next-line react/jsx-key
          <li
          className={`email ${email.read ? "read" : "unread"}`}

      >
          <div className="select">
              <input
                  className="select-checkbox"
                  type="checkbox"
                  checked={email.read}
                  onChange={() => toggleRead(email)}
              />
          </div>
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
      </li>
        ))}
    </ul>
    )
}

export default Email