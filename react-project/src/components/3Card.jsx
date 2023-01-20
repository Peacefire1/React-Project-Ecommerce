export default function Card3() {
    return (
        <div className="row">
            <div className="col-8 d-flex border rounded-4 m-1">
                <img src="images/speaker1.png" alt="" />
                <div className='big_card'>
                    <p>JBL bar 2.1 deep bass</p>
                    <p>$11,70</p>
                    <i>stars</i><br />
                    <button className='border-0 rounded-3 bg-info p-3'>Add to cart icon</button>
                </div>
            </div>
            <div className="col mid_card">
                <div className="border rounded-4 m-1 d-flex RCard" >
                    <img src="images/controller.png" alt="" />
                    <div>
                        <p>Play game</p>
                        <p>$11,70</p>
                        <i>stars</i>
                    </div><s></s>
                </div>
                <div className="border rounded-4 m-1 d-flex h-1 RCard">
                    <img src="images/speaker1.png" alt="" />
                    <div>
                        <p>Play game</p>
                        <p>$11,70</p>
                        <i>stars</i>

                    </div>
                </div>

            </div>
        </div>
    )
}