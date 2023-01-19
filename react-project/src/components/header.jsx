import { React } from "react";
import logo from "../images/logo.svg"
import { Cart3, Heart, Icon0CircleFill, Person } from "react-bootstrap-icons"
import { useState } from "react";

function Header(props) {
    const [wish, setWish] = useState(false)
    function wishlistFunc() {
        setWish(!wish)
    }
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
                    <a className="a" href="/signIn" ><Person /> Sign in</a>
                    <a className="a" onClick={wishlistFunc} ><Heart /> {props.wishList.length} </a>
                    <a className="a" href="#" ><Cart3 /> 0</a>
                    {wish ? <div className="wish">{props.wishList}</div> : ""}

                </div>



            </div>

        </div>
    )
}
export default Header;
