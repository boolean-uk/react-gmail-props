import Burgermenu from "./Headercomponents/Burger-menu";
import Searchbar from "./Headercomponents/Search-bar";

function Emailheader() {
    return (
        <header className="header">
            <Burgermenu />
            <Searchbar />
        </header>
    )
}

export default Emailheader