import logo from './logo.svg';
import './App.css';
import Contact from "./contact"
import Header from './header';

function App() {
  return (
    <div className="App">
      {<Contact/>}
      {<Header/>}
    </div>
  );
}

export default App;
