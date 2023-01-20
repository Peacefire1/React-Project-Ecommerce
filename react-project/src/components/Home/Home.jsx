import Card3 from "../3Card";
import Banner from "../banner";
import BlueSection from "../BlueSec";
import Cards from "../cards";
import News from "../LatesNews";
import Logos from "../Logos";
import MainMenu from "../MainMenu";
import Products from "../products";
import Sliders1 from "../slider";
import Sliders2 from "../sliderItems";
import UserCardData1 from '../userCard';

export default function Home() {

    return (
        <div>
            <MainMenu />
            <Sliders1 />
            <Sliders2 />
            <Products />
            <Cards />
            <Banner />
            <Card3 />
            <BlueSection />
            <UserCardData1 />
            <Logos />
            <div className="d-flex my-3 newstitle">
                <h4>Latest news</h4>
                <a href="3">View all</a>
            </div>
            <News />

        </div>
    )
}