import React from "react";
import cardData from "../data/card";

export default function Card2(props) {
    return (
        <div className="cards1 card p-2 m-2">
            <img id='cardsImg' src={c.img} className="card-img-top" />
            <img className='pointer' src="images/heart.png" alt="" onClick={() => {
                props.setWishList(props.wishList + 1)
            }} />
            <div className="card-body">
                <h5 className="card-title text-start">{c.name}</h5>
                <p className="card-text text-start">{c.price}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>

        </div>
    )
}