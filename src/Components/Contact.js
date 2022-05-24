import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./AboutUs";
import NavComponent from "./NavComponent";


const Contact =()=>{
    return(
        <div>
        <NavComponent></NavComponent>
            <h1>
                This is my Contac Page
            </h1>
        </div>
    )
}
export default Contact;