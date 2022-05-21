import React from "react";
import './App.css';
import HomeAccess from './Components/HomeAccess';
import Home from './Components/Home';
import About from './Components/aboutUs';
import Contact from './Components/Contact';
import { Route, Routes } from 'react-router';
import NavComponent from './Components/NavComponent';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <div className="Form-Container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeAccess/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="aboutUs" element={<About/>}/>
          <Route path="Contact" element={<Contact/>}/>
          <Route path='NavComponent' element={<NavComponent/>}/>
        </Routes>
        </BrowserRouter>   
        </div>    
    </div>
  );
}

export default App;
