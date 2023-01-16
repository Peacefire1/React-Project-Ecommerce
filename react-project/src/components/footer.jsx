import React from "react";


export default function Footer() {
    return (
        <div className="bg-info p-3">
            <div className=" container d-flex align-items-center bg-white rounded-4 white-search">
                <h4>Subscribe newsletter</h4>
                <input type="text" placeholder="Emaill address" />
                <button>S</button>
                <div className="d-flex">
                    <img src="images/headphonelogo.png" alt="" />
                    <div className="callUs">
                        <p>Call us 24/7 : </p>
                        <p>(+62) 0123 567 789</p>
                    </div>
                </div>
            </div>
        </div>
    )
}