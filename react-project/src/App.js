import logo from './logo.svg';
import './App.css';
import Contact from "./components/contact"
import Header from './components/header';
import MainMenu from './components/MainMenu';
import Sliders1 from './components/slider';
import Sliders2 from './components/sliderItems';
import Products from './components/products';
import Cards from './components/cards';
import UserCardData1 from './components/userCard';
import News from './components/LatesNews';
import Footer from './components/footer';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/navbar/home';


function App() {
  const [wishList, setWishList] = useState(0)
  const [addList, setAddList] = useState([])
  return (
    <div className="App">
      <Contact />
      <Header wishList={wishList} addList={addList} />
      <Routes>

        <Route path='signIn' element={<SignIn />} />
      </Routes>
      <MainMenu />
      <Sliders1 />
      <Sliders2 />
      <Products />
      <Cards wishList={wishList} setWishList={setWishList} />

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
      {/* userCard  */}
      <UserCardData1 />
      {/* userCard  */}

      {/* Logos  */}
      <div className='bg-info d-flex justify-content-around logos rounded-4'>
        <img src="images/logo1.png" alt="" />
        <img src="images/logo2.png" alt="" />
        <img src="images/logo3.png" alt="" />
        <img src="images/logo4.png" alt="" />
        <img src="images/logo5.png" alt="" />
      </div>
      {/* Logos  */}
      <div className="d-flex my-3 newstitle">
        <h4>Latest news</h4>
        <a href="3">View all</a>
      </div>
      <News />
      <Footer />
    </div>
  );
}

export default App;
