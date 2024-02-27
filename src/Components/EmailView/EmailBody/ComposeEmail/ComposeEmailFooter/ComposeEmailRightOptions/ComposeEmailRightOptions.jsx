import "./ComposeEmailRightOptions.css"
import Trashbin from "@/assets/icons/rubbish-bin-delete-button.png"
import Options from "@/assets/icons/NewIcons/ellipsis-v-icon.webp"

const CompostEmailRightOptions = () => {
    return (
        <div className="compose-footer-right">
            <button>
                <img src={Options}></img>
            </button>
            <button>
                <img src={Trashbin}></img>
            </button>
        </div>
    )
}

export default CompostEmailRightOptions