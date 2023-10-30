
import initialEmails from './data/emails'
import '../components/App.css'
import Emails from './components/Emails'

const getReadEmails = emails => emails.filter(email => !email.read)

function App() {
  const unreadEmails = Emails.filter(email => !email.read)
  const starredEmails = Emails.filter(email => email.starred)


let filteredEmails = Emails
 function App() {
      <main className="Emails">
        <Emails filteredEmails={filteredEmails} emailState={[Emails, setEmails]} />
        </main>
     }
    }