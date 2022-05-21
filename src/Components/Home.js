import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Link } from "react-router-dom";
import NavComponent from "./NavComponent";

const Home =()=>{
    return(      
            <div>
            <NavComponent/>
            <h1>This is my Home Page </h1>
            <h2>wELCOME</h2>
            </div>
        
    )
}

export default  Home;