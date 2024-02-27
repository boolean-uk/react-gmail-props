

function EmailDisplay({displayEmail, setDisplayEmail}) {
    return ( 
        <main>
            <div>
                <button onClick={setDisplayEmail("")}>Back</button>
                <h1>{displayEmail.title}</h1>
                <h2>{displayEmail.sender}</h2>
                <br></br>
                <h2>Content of Email</h2>


            </div>
        </main>


     )
}

export default EmailDisplay;