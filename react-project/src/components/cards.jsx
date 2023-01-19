import React from 'react'
import cardData from '../data/card'
import AliceCarousel from 'react-alice-carousel'
import SliderCards from './SlidersCards';

function Cards(props) {
    // const liked = props.wishList.filter((wish) => wish.id === props.)
    const cardsData = cardData.map((dataEl) => {
        const children = dataEl.children.map((c) => {
            return (
                <SliderCards
                    c={c}
                    wishlist={props.wishList}
                    setwishlist={props.setWishList}
                />
            )
        })

        return (
            <div className='container d-flex flex-wrap'>
                {children}
            </div>
        )
    })
    return (

        <div>
            < AliceCarousel className="container d" disableButtonsControls="true"  >
                {cardsData}
            </AliceCarousel >
        </div>


    )
}

export default Cards
