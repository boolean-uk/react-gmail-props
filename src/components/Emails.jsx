import Email from "./Email" //Imports Email component
//Renders multiple Email components
function Emails(props){
    const { emails, toggleRead, toggleStar} = props
    return(
        <main className="emails">
            <ul>
                {emails.map((email, index) => 
                    <Email key={index}
                    email={email}
                    toggleRead={toggleRead}
                    toggleStar={toggleStar}/>)}
            </ul>

        </main> 
        
    )
}
    


export default Emails