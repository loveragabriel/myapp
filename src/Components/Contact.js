import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./aboutUs";


const Contact =()=>{
    return(
        <div className="Form-Container">
            <h1>
            This is My Contact Page
            </h1>
            <nav>
            <Link to="/">Home Access</Link>
            <Link to="/aboutUs">About Us</Link>
            <Link to="/Contact">Contacs</Link>
            
            </nav>
            <About/>
            
        </div>
    )
}

export default Contact;