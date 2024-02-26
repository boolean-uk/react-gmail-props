import '../../styles/email/EmailTitle.css'
import ProtoType from 'prop-types'


const EmailTitle = (props) => {

  EmailTitle.ProtoType = {
    title: ProtoType.string
  }

  const {title} = props ?? {}

      return(
        <div className="title">
        <h1>{title}</h1>
      </div>

      ) 
      
    }

    export default EmailTitle;