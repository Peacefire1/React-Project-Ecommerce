import {React} from "react";
import logo from "./images/logo.svg"
import { Person } from "react-bootstrap-icons"

function Header (){
    return(
        <div className="Header">
            <img src={logo} alt="logo" />
            <div>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button class="btn btn-warning" type="button" id="button-addon2">Search</button>
                </div>
                <a className="a" href="#" ><Person/> Sign in</a>
                <p></p>
                <p></p>

            </div>
            
        </div>
    )
}
export default Header;
