import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//TODO: Create private routes!

//Pages
import './App.css';
import About from './Components/AboutUs';
import Home from "./Components/Home";
import HomeAccess from "./Components/HomeAccess";
import Contact from "./Components/Contact";
import NavComponent from "./Components/NavComponent";
import SignUp from "./Components/SignUp";
import UserCreated from "./Components/UserCreated";
import { NotFound } from "./Components/NotFound";


function App() {
  return (
    <div className="App">
    <div className="Form-Container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeAccess/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="AboutUs" element={<About/>}/>
          <Route path="Contact" element={<Contact/>}/>
          <Route path='NavComponent' element={<NavComponent/>}/>
          <Route path='SignUp' element={<SignUp/>}/>
          <Route path='UserCreated' element={<UserCreated/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>   
        </div>    
    </div>
  );
}

export default App;
