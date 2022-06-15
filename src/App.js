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
import Dash from "./Components/Dash";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import NavComponent from "./Components/NavComponent";
import SignUp from "./Components/SignUp";
import UserCreated from "./Components/UserCreated";
import { NotFound } from "./Components/NotFound";
import Private from "./Components/Private";




function App() {
  return (
    <div className="App">
    <div className="Form-Container">
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route exact path='/' element={<Private/>}>
            <Route exact path='/Dash' element={<Dash/>}/>
          </Route>
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
