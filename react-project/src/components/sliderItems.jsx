import { React } from "react";
// import { carouselData } from "../data/slider";
import AliceCarousel from 'react-alice-carousel'
import { carouselData2 } from "../data/slider";

function Sliders2() {
    const crouselData2 = carouselData2.map(el => {
        return (
            <div className="container d-flex justify-content-around">
                <div className="card d-flex align-items-center justify-content-between w-80 p-4 m-0">

                    <div className="d-flex">
                        <img src={el.url} className={el.style} id="sliders2-img" />
                        <p>{el.price}</p>
                    </div>
                    <div>
                        <p>{el.name}</p>
                        <p>{el.item}</p>
                    </div>

                </div>

            </div>
        )
    })
    return (
        < AliceCarousel className="container"  disableDotsControls = "true" responsive={{
            0: {
                items: 3
            }
        }
        }>
            {crouselData2}
        </AliceCarousel >
    )
}

export default Sliders2