import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Link } from "react-router-dom";
import About from "./aboutUs";
import NavComponent from "./NavComponent";

const HomePage =()=>{
    return(      
            <div>
            <NavComponent/>
            <h1>This is my Home Page </h1>
            <h2>wELCOME</h2>
            </div>
        
    )
}

export default HomePage;