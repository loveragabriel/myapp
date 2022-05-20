import logo from './logo.svg';
import './App.css';
import FormTemp from './Components/HomeAccess';
import HomePage from './Components/home';
import About from './Components/aboutUs';

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <FormTemp/>
      <HomePage/>
      <About/>
      </div>
  );
}

export default App;
