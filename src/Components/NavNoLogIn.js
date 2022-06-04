import React from "react";
import { Routes, Route, Link } from "react-router-dom";


const NavNoLogIn = () =>{
    return(
        <div>
            <div className="nav-container">
                <nav className="NavBar">
                   <div className="nav-icon">
                   <i className="fa-solid fa-jug-detergent"></i>                    </div>
                    <ul>
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
                        <li className="btn-contact">
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                    </ul>
                    <div>
                    </div>            
                </nav>
            </div>
        </div>
    )
}

export default NavNoLogIn; 