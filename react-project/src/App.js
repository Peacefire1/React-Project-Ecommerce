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
      <div className="banner">
        <input type="button" value="New laptop" />
        <h2>Sale u to 50% off</h2>
        <p>12 inch hd display</p>
        <input type="button" value="Shop Now" />
      </div>
    </div>
  );
}

export default App;
