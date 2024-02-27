

function OpenEmail(props) {
    const openEmail = email => {
        //open email
        console.log("open " + email.title)
        /**
         * {isEmailOpen && (
        <div className="email-overlay">
          }
          <p>{props.email.content}</p>
          }
          <button onClick={closeEmail}>Go back to inbox</button>
        </div>
      )}
         */
    
      }

    return (
        <div className="title" onClick={() => openEmail(props.email)}>{props.email.title}</div>

      
    )
}

export default OpenEmail