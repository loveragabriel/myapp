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
                        <li className="btn-home">
                            <Link to="/">
                                Home Access
                            </Link>
                        </li>
                        <li className="btn-about  ">
                            <Link to="/aboutUs">
                                About Us
                            </Link>
                        </li>
                        <li className="btn-contact">
                            <Link to="/Contact">
                                Contacs
                            </Link>
                        </li>
                    </ul>
                    <div>
                        <button>
                            <Link to="/">
                                Log Out
                            </Link>
                        </button>
                    </div>            
                </nav>
            </div>
        </div>
    )
}

export default NavComponent; 