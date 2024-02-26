import "./ComposeemailFooter.css"
import ComposeEmailFooterLeft from "./ComposeEmailFooterLeft/ComposeEmailFooterLeft"
import ComposeEmailRightOptions from "./ComposeEmailRightOptions/ComposeEmailRightOptions"

const ComposeEmailFooter = () => {
    return (
        <div className="compose-footer">
            <ComposeEmailFooterLeft/>
            <ComposeEmailRightOptions/>
        </div>
    )
}

export default ComposeEmailFooter