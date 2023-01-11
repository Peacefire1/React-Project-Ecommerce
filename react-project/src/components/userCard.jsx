import { React } from "react";
import userCardData from "../data/userCardData";
import AliceCarousel from "react-alice-carousel";

function userCardData1() {
    const userCard = userCardData.map(el => {
        return (
            <div className="card m-4 text-start rounded-4 p-3">
                <div className="d-flex align-items-center">
                    <img src={el.user} />
                    <p>{el.name}</p>
                </div>
                <br />
                <p className="bg-info p-3 rounded-4">
                    {el.text}
                </p>
            </div>
        )
    })
    return (
        < AliceCarousel disableButtonsControls="true" responsive={{
            0: {
                items: 3
            }
        }
        }
        >
            {userCard}
        </AliceCarousel >
    )
}

export default userCardData1