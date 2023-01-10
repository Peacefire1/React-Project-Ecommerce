import logo from './logo.svg';
import './App.css';
import Contact from "./components/contact"
import Header from './components/header';
import MainMenu from './components/MainMenu';
import Sliders1 from './components/slider';
import Sliders2 from './components/sliderItems';
import Products from './components/products';
import Cards from './components/cards';

function App() {
  return (
    <div className="App">
      <Contact />
      <Header />
      <MainMenu />
      <Sliders1 />
      <Sliders2 />
      <Products />
      <Cards />

      {/* Banner Section  */}
      <div className="container banner">
        <div className='ban'>
          <input type="button" value="New laptop" />
          <h1>Sale u to 50% off</h1>
          <p>12 inch hd display</p>
          <input type="button" value="Shop Now" />

        </div>
      </div>
      {/* Banner Section  */}
      {/* 3 Card Section  */}
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
      {/* 3 Card Section  */}

      {/* Blue section  */}
      <div className='bg-info row rounded-4 py-5 my-4'>
        <div className='col-4 d-flex justify-content-center'>
          <img className='m-0' src="images/box-tick.png" alt="" />
          <div className='m-0'>
            <h4>Free delivery</h4>
            <p>on order above $50,00</p>
          </div>
        </div>
        <div className='col-4 d-flex justify-content-center'>
          <img className='m-0' src="images/crown.png" alt="" />
          <div className='m-0'>

            <h4>Best quality</h4>
            <p>best quality in low price</p>
          </div>
        </div>
        <div className='col-4 d-flex justify-content-center'>
          <img className='m-0' src="images/Vector.png" alt="" />
          <div className='m-0'>

            <h4>1 year warranty</h4>
            <p>Avaliable warranty</p>
          </div>
        </div>
      </div>
      {/* Blue section  */}
    </div>
  );
}

export default App;
