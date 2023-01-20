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
import SignIn from './components/Header/SignIn';
import Banner from './components/banner';
import Card3 from './components/3Card';
import BlueSection from './components/BlueSec';
import Logos from './components/Logos';
import Home from './components/Home/Home';


function App() {
  const [wishList, setWishList] = useState([])
  const [addList, setAddList] = useState([])
  return (
    <div className="App">
      <Contact />
      <Header wishList={wishList} setWishList={setWishList} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signIn' element={<SignIn />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
