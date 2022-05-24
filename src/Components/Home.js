import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Link } from "react-router-dom";
import NavComponent from "./NavComponent";

const Home =()=>{
    return(      
            <div>
            <NavComponent/>
            <h1>Welcome you are in </h1>
            </div>
        
    )
}

export default  Home;