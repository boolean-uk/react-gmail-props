export default function Open(props){
    const { email, setOpen } = props
    
    return(
        <>
            <header>
                <h1>{email.sender}</h1>
            </header>
            <main>
                <p>{email.title}</p>
            </main>
            <footer>
                <button onClick={() => setOpen(null)}>Go Back</button>
            </footer>
        </>
    )
}