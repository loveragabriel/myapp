import logo from './logo.svg';
import './App.css';
import FormTemp from './Components/HomeAccess';
import HomePage from './Components/home';
import About from './Components/aboutUs';
import Contact from './Components/Contact';
import { Route, Routes } from 'react-router';

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="aboutUs" element={<About/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
