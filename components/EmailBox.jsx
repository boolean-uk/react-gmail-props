import './styles/email.css'
export function EmailBox(props){
    return(
        <div>
            <p>Gmail</p>
                <div className="emailBox">
                    <div className="emailSidebar">
                        <a href="#reply">Reply</a>
                        <a href="#documents">documents</a>
                        <a href="#drafts">Drafts</a>
                    </div>
                    <div className="main-content">
                    <div className="emailHeader">
                        <h1>{props.email.sender}</h1>
                        <h4>{props.email.title}</h4>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas at qui accusamus ducimus ut nihil eum nulla, necessitatibus similique animi perspiciatis hic possimus eveniet ea, cupiditate asperiores in ab fugiat?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde vel, recusandae voluptatum mollitia iusto repudiandae praesentium autem pariatur culpa cumque veritatis, doloremque quae ab aliquid commodi aperiam qui. Quaerat, minima?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestiae ex, praesentium laborum sapiente alias deleniti enim distinctio quo soluta possimus voluptas odit id ipsam tenetur dicta officia vel provident!</p>
                    <div className="emailFooter">
                        <p>Footer Content</p>
                    </div>
            </div>
               
            </div>
        </div>
    )
}