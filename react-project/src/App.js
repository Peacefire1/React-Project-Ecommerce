import logo from './logo.svg';
import './App.css';
import Contact from "./components/contact"
import Header from './components/header';
import MainMenu from './components/MainMenu';
import Sliders1 from './components/slider';
import Sliders2 from './components/sliderItems';
import Products from './components/products';

function App() {
  return (
    <div className="App">
      <Contact />
      <Header />
      <MainMenu />
      <Sliders1 />
      <Sliders2 />
      <Products />
    </div>
  );
}

export default App;
