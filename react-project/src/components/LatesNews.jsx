import React from "react";
import news from "../data/news";
import AliceCarousel from "react-alice-carousel";


export default function News() {
    const LatestNews = news.map(el => {
        return (
            <div className="latestnews border rounded-5 mx-3 d-flex text-start p-3">
                <img src={el.img} alt="" />
                <div className="mx-3">
                    <h5><a href="">{el.date}</a></h5>
                    <h3>{el.title}</h3>
                    <p>{el.text}</p>
                    <p>{el.by}</p>
                </div>
            </div>
        )
    })
    return (
        < AliceCarousel disableButtonsControls="true" responsive={{
            0: {
                items: 2
            }
        }
        }
        >
            {LatestNews}
        </AliceCarousel >
    )
}