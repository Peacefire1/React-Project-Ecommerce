import { React } from "react";
import logo from "../images/logo.svg"
import { Cart3, CircleFill, Heart, Icon0Circle, Icon0CircleFill, Person } from "react-bootstrap-icons"

function Header() {
    return (
        <div className="Header">
            <div className="container d-flex justify-content-between py-4">
                <div className="d-flex">
                     <img src={logo} alt="logo" className="mx-5" />
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button class="btn btn-warning" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <a className="a" href="#" ><Person /> Sign in</a>
                    <a className="a" href="#" ><Heart /> <Icon0CircleFill className="text-warning"/> </a>
                    <a className="a" href="#" ><Cart3 /> <Icon0CircleFill className="text-warning"/> </a>

                </div>
                    


            </div>

        </div>
    )
}
export default Header;
