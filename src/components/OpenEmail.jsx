import React from 'react'

function OpenEmail({email, setEmailData}) {
  return (
    <>
        <h1>{email.sender}</h1>
        <div>
            <h2>{email.title}</h2>
        </div>
        <button onClick={() => setEmailData()}>Back</button>
    </>
  )
}

export default OpenEmail