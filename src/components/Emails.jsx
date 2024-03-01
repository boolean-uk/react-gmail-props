import Email from "./Email"

export default function Emails(props){
    const { emails, toggleRead, toggleStar, setOpen } = props

    return(
        <>
            {emails.map((email, index) => (<Email key={index} email={email} toggleRead={toggleRead} toggleStar={toggleStar} setOpen={setOpen}/>))}
        </>
    )
}