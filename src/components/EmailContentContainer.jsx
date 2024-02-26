import EmailContent from './EmailContentComponents/EmailContent';
import Prototype from 'prop-types'



const EmailContentContainer = (props) => {

  EmailContentContainer.Prototype = {
    setShowEmail: Prototype.bool,
    emailToShow: Prototype.object
  }

  const {setShowEmail, emailToShow} = props ?? {}

      return(


        <>
        <EmailContent {...{setShowEmail, emailToShow}}/></>    

      ) 
      
    }

    export default EmailContentContainer;