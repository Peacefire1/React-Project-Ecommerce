import { carouselData } from "../data/slider"
import AliceCarousel from 'react-alice-carousel'

function Sliders1(props) {
    const crouselData1 = carouselData.map(el => {
        return (
            <div className="container d-flex justify-content-between sliderIMG">
                <div className="p-5">
                    <h2>{el.name}</h2>
                    <button className="btn btn-warning">Shop now</button>
                    <button className="btn btn-outline-secondary">View more</button>
                </div>
                <div className="d-flex align-items-center">
                    <img src={el.url} className={el.style} id="img" />
                    <p className="btn btn-warning rounded-5">{el.price}</p>
                </div>
            </div>
        )
    })

    return (
        < AliceCarousel disableButtonsControls="true">
            {crouselData1}
        </AliceCarousel>

    )
}
export default Sliders1