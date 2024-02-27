import ActionsComponent from "./EmailDisplay/Actions"
import BodyComponent from "./EmailDisplay/Body"
import HeaderComponent from "./EmailDisplay/Header"
import TitleComponent from "./EmailDisplay/Title"

function EmailDisplayComponent({ email, setSelectedEmail}) {
    return (
        <main className="email-display">
            <HeaderComponent email={email} setSelectedEmail={setSelectedEmail}/>
            <TitleComponent title={email.title} />
            <BodyComponent email={email}/>
            <ActionsComponent />
        </main>
    )
}

export default EmailDisplayComponent