import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Link } from "react-router-dom";
import About from "./aboutUs";

const HomePage =()=>{
    return(
        
        
        <div className="Form-Container">          
            <h1 className="home-title">LAVADOS</h1>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About Us</li>
            </ul>
        </div>
        
    )
}

export default HomePage;