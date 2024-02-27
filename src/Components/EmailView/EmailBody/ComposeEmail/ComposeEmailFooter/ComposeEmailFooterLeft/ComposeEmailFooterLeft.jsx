import "./ComposeEmailFooterLeft.css"
import Down from "@/assets/icons/NewIcons/triangle-bottom-arrow-icon.png"
import Underline from "@/assets/icons/NewIcons/underline-icon.webp"
import Pen from "@/assets/icons/NewIcons/pen-icon.png"
import Paperclip from "@/assets/icons/NewIcons/attachment-pin-icon.webp"
import LinkIcon from "@/assets/icons/NewIcons/hyperlink-icon.webp"
import EmoteMenu from "@/assets/icons/NewIcons/happy-icon.webp"
import CloudSave from "@/assets/icons/NewIcons/cloud-data-download-icon.webp"
import ImageIcon from "@/assets/icons/NewIcons/image-icon.webp"
import DelaySendingIcon from "@/assets/icons/NewIcons/uptime-arrow-icon.webp"

const ComposeEmailFooterLeft = () => {
    return (
        <div className="compose-footer-left">
        <button id="send-button">SEND</button>
        <button id="send-button-options">
            <img src={Down}></img>
        </button>
        <button>
            <img src={Underline}></img>
        </button>
        <button>
            <img src={Paperclip}></img>
        </button>
        <button>
            <img src={LinkIcon}></img>
        </button>
        <button>
            <img src={EmoteMenu}></img>
        </button>
        <button>
            <img src={CloudSave}></img>
        </button>
        <button>
            <img src={ImageIcon}></img>
        </button>
        <button>
            <img src={DelaySendingIcon}></img>
        </button>
        <button>
            <img src={Pen}></img>
        </button>
    </div>
    )
}

export default ComposeEmailFooterLeft