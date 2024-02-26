/* eslint-disable react/prop-types */
import { useState } from 'react'
import './styles/emails.css'
import EmailComponent from "./EmailComponent"
import DisplayEmailComponent from './DisplayEmailComponent'

function EmailsComponent ({filteredEmails, toggleRead, toggleStar}) {

    const [displayEmail, setDisplayEmail] = useState(null)

    const clickedEmail = (email) => {setDisplayEmail(email)}

    const isOpen = (email) => {
        if(displayEmail === email){
            return true
        }
        return false
    }

    return (<main className="emails">
        {displayEmail === null ?
        (
        <ul>
        {filteredEmails.map((email, index) => (
            <EmailComponent
                key={index}
                index={index}
                email={email}
                toggleRead={toggleRead}
                toggleStar={toggleStar}
                onClick={()=>clickedEmail(email)}
                />
            ))}
        </ul>
        ) : <DisplayEmailComponent email={displayEmail} onClick={()=>clickedEmail(null)}/>}
    </main>)
}
export default EmailsComponent