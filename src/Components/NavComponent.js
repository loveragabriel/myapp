import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightRotate } from '@fortawesome/free-solid-svg-icons'


const NavComponent = () =>{
    return(
        <div>
            <div className="nav-container">
                <nav className="NavBar">
                    <h1 className="web-title">
                       Icon
                    </h1>
                    <div className="nav-icon">
                    <FontAwesomeIcon icon="fa-solid fa-acorn" />
                    </div>
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