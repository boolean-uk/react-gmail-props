
import { useState } from 'react'
import arrowBack from './../assets/icons/arrow-back.png'
import backArrow from './../assets/icons/back-arrow.png'
import downloadButton from './../assets/icons/download-button.png'
import rateStarButton from './../assets/icons/rate-star-button.png'
import rubbishButton from './../assets/icons/rubbish-bin-delete-button.png'
import avatar from './../assets/icons/avatar.jpg'

import './../styles/emailContent.css'



function Main(props){
    const [isClicked, setBool] = useState(false);
    let [email, setEmail] = useState({
    id: '',
    sender: props.email[0].sender ? props.email[0].sender: `anynomus`,
    title: props.email[0].title ? props.email[0].title:"(no title)",
    starred: false,
    read: false 
  })


let Action;
    if(isClicked){
      Action = <ReplyForm sender={props.email[0].sender}/>;
      
    }else{
      Action = <div></div>
    }
    return(
      <main className="email-view">
<article className="email-content">
            <div className="title">
                <h1>{props.email[0].title !== undefined ? props.email[0].title:"(no title)"}</h1>
            </div>
            <header className="email-content--header">
              <div className="avatar"></div>
              <div className="email-info">
              <div className="sender-info">
                    <h2>{email.sender}</h2>
                    <em>&lt;no-reply@freepik.com&gt;</em>
                  </div>
                  <div className="user-info">
        <p>
          to me <em>&lt;nicolas@boolean.co.uk&gt;</em>
        </p>
      </div>
              </div>
              <div className="date-info">
                <p>17 March 2021, 09:33</p>
              </div>
              <div className="email-action-icons">
      <ul>
        <li>
          <img className="icon" src={backArrow} alt="reply button" />
        </li>
        <li>
          <img
            className="icon"
            src={rateStarButton}
            alt="star button"
          />
        </li>
        <li>
          <img
            className="icon"
            src={rubbishButton}
            alt="delete button"
          />
        </li>
      </ul>
    </div>
            </header>
            <section className="email-body">
              <div className="content">
                <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops</p>
              </div>
            </section>
            <section className="email-actions">
              <button onClick={() => setBool(true)}>Reply</button>
              <button onClick={() => setBool(true)}>Forward</button>
            </section>
            {Action}
          </article>
      </main>
    )

  
}
  
    function ReplyForm(props){
        return(<>
          <header className="email-content--header">
                    <div className="avatar"><img className="avatar" src={avatar}></img>
                    
                    </div>
                    <div className='reply-input container'>
                        <div>
                         <div className="email-info container">
                            <img className="icon" src={backArrow} alt="reply button" />

                            <div className="sender-info">
                             <h2>{props.sender}</h2>
                             <em>&lt;no-reply@freepik.com&gt;</em>
                            </div>
                        </div>


                      <form>
                      <input type="text"></input><br></br>
                      <div className='container-footer'>
                      <button className='send-btn'>Send</button>
                      
                      <img className='icon' src={rubbishButton}></img>
                      </div>
                    </form>
                      
              </div>
              </div>
            </header>
          </>
        )
        
        
        }
        
export default Main;