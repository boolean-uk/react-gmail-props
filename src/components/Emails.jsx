import Email from './Email.jsx'


function Emails(props) {
    return(
        <>
            <main className="emails">
                <ul> 
                {props.filteredEmails.map((email, index) => (
                        <Email 
                            email={email} 
                            key={index} 
                            toggleRead={props.toggleRead} 
                            toggleStar={props.toggleStar}/>
                ))}
                </ul>
            </main>
        </>
    )
}
export default Emails