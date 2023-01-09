import react from 'react'
import cardData from '../data/card'
import AliceCarousel from 'react-alice-carousel'
import { Bootstrap } from 'react-bootstrap-icons'

function Cards() {
    const cardsData = cardData.map(dataEl => {
        return (
            <div className='container d-flex justify-content-around flex-wrap my-5'>
                <div class="card m-1 w-100">
                    <img id='cardsImg' src={dataEl.img} class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title text-start">{dataEl.name}</h5>
                        <p class="card-text text-start">{dataEl.price}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

        )
    })
    return (

        < AliceCarousel className="container d-flex" disableButtonsControls="true" responsive={{
            0: {
                items: 1,
            },
            1024: {
                items: 4,
                itemsFit: 'contain',
            }
        }} >
            {cardsData}

        </AliceCarousel>

    )
}

export default Cards

// const crouselData1 = carouselData.map(el => {
//     return (
//         <div className="container d-flex justify-content-between sliderIMG">
//             <div className="p-5">
//                 <h2>{el.name}</h2>
//                 <button className="btn btn-warning">Shop now</button>
//                 <button className="btn btn-outline-secondary">View more</button>
//             </div>
//             <div className="d-flex align-items-center">
//                 <img src={el.url} className={el.style} id="img" />
//                 <p className="btn btn-warning rounded-5">{el.price}</p>
//             </div>
//         </div>
//     )
// })