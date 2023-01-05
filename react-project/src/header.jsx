import {React} from "react";
import logo from "./images/logo.svg"

function Header (){
    return(
        <div className="Header">
            <img src={logo} alt="logo" />
            <input type="text" />
        </div>
    )
}
export default Header;
