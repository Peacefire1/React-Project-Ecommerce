import react from 'react'
import cardData from '../data/card'
import AliceCarousel from 'react-alice-carousel'
import ReactStars from "react-rating-stars-component";

function Cards() {
    const cardsData = cardData.map(dataEl => {
        const children = dataEl.children.map(c => {
            return (
                <div className="card w-25">
                    <img id='cardsImg' src={c.img} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title text-start">{c.name}</h5>
                        <p className="card-text text-start">{c.price}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />,
                </div>
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
