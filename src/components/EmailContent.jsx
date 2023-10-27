//this is me essentially recycling the code from react-gmail-intro so I can play around with it


function EmailContent(props) {
return(
    <>
        <article className="email-content">
                <div className="title">
                    <h1>Attention-grabing title</h1>
                </div>
                <header>
                    <div className="sender">{props.email.sender}</div>
                    <div className="title">{props.email.title}</div>
                </header>
                <section className="email-body">
                    <div className="content">
                        <p>Greetings, fellow email-sending humans!</p>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, esse quas numquam nam ipsa iusto facilis, a eveniet laboriosam, libero neque. Adipisci, alias iusto quae inventore totam animi obcaecati excepturi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, repudiandae, tempore nemo dignissimos error at voluptatem corporis ipsum quia obcaecati aut quod voluptatum deserunt libero molestias quisquam, consectetur placeat nobis?</p>
                        <br/>
                        <p>Much informative. Such useful. Very fascinating. Right?</p>
                        <br/>
                        <p>Something something regards,</p>
                        <br/>
                        <p>Totally a genuine human</p>
                    </div>
                </section>
                <section className="email-actions">
                    <button>Reply</button>
                    <button>Forward</button>
                </section>
        </article>
    </>
)

}

export default EmailContent