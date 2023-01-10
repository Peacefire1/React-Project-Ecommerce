import react from 'react'
import cardData from '../data/card'
import AliceCarousel from 'react-alice-carousel'
import { Bootstrap } from 'react-bootstrap-icons'

function Cards() {
    const cardsData = cardData.map(dataEl => {
        const children = dataEl.children.map(c => {
            return (
                <div className="container card w-25">
                    <img id='cardsImg' src={c.img} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title text-start">{c.name}</h5>
                        <p className="card-text text-start">{c.price}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
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
