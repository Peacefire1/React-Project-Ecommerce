import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import { Heart, HeartFill, } from "react-bootstrap-icons"

export default function SliderCards(props) {

    const c = props.c
    // const liked = props.wishlist.filter((wish) =>
    //     wish.id === props.c.id
    // )[0]
    return (
        <div className="cards1 card p-2 m-2">
            <img id='cardsImg' src={c.img} className="card-img-top" />
            {/* <a onClick={() => {
                if (!liked) {
                    const likedProduct = {
                        id: c.id,
                        name: c.name,
                        liked: true,
                    };
                    props.setwishlist([...props.wishlist, likedProduct])
                } else {
                    props.setwishlist(props.wishlist.filter((w) => w.id !== c.id))
                }
                { console.log(props.wishlist); }
            }}>
                {liked ? (
                    <HeartFill />
                ) : (<Heart />)} */}

            {/* </a> */}
            <div className="card-body">
                <h5 className="card-title text-start">{c.name}</h5>
                <p className="card-text text-start">{c.price}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            <ReactStars
                count={5}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
            />,

        </div>
    )
}