import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavComponent from "./NavComponent";


const About =()=>{
    return(
        <div>
        <NavComponent></NavComponent>
            <h1>About Us</h1>
            <h2>Please learn more about us!</h2>
            
        </div>
    )
}

export default About;