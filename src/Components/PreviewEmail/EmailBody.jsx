import "./styles/EmailBody.css"
import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'


export function EmailBody() {
    

    return (
        <>
          <section className="email-body">
            <div className="content">
              I could have done something here, but leaving default as info not included in emails.js. Notice that sender and time is also static for all classes. 
              The arrows at the top right does work though. 
              <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
            </div>
          </section>
        </>
    )
}
