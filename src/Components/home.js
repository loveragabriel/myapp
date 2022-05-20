import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Link } from "react-router-dom";
import About from "./aboutUs";

const HomePage =()=>{
    return(
        
        
        <div className="Form-Container">          
            <h1 className="home-title">LAVADOS</h1>
            <nav>
            <Link to="/HomeAccess">Home Access</Link>
            <Link to="aboutUs">About Us</Link>
            <Link to="Contact">Contacs</Link>
            
            </nav>
        </div>
        
    )
}

export default HomePage;