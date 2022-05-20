import React from "react";
import { Routes, Route, Link } from "react-router-dom";


const About =()=>{
    return(
        <div className="Form-Container">
            <h1>
                Here we talk abput us
            </h1>
            
            <nav>
            <Link to="/">Home Access</Link>
            <Link to="/aboutUs">About Us</Link>
            <Link to="/Contact">Contacs</Link>
            
            </nav>
        </div>
    )
}

export default About;