import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Link } from "react-router-dom";


const NavComponent = () =>{
    return(
        <div>
            <div className="nav-container">
                <nav className="NavBar">
                    <h1 className="web-title">
                        WEB APP NAME
                    </h1>
                    <div className="nav-icon">
                            ICON
                    </div>
                    <ul>
                        <li><Link to="/HomeAccess">Home Access</Link></li>
                        <li><Link to="/aboutUs">About Us</Link></li>
                        <li><Link to="/Contact">Contacs</Link></li>
                    </ul>            
                </nav>
            </div>
        </div>
    )
}

export default NavComponent; 