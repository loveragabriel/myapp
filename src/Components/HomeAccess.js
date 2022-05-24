import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router";
import NavComponent from "./NavComponent";
import About from "./AboutUs";

//Pages



const HomeAccess = () =>{
    const [correo, setcorreo] = useState("");
    const [Password, setPassword] = useState('');
    const navigate =  useNavigate();
    const submited = (e) => {

        e.preventDefault()
        const blog = {correo, Password}
        let letEmail = blog.correo
        /*console.log(letEmail); */
        let letPasswrd = blog.Password
        /*console.log(letPasswrd); */

        if (letEmail=="loveragabriel" && letPasswrd=="Entrar123"){navigate('/Home')}
        else alert("You're Wrong try Again");  
    }
   
    return( 
        <div>
         <h1>my-react-page</h1>
            <h2 className="log-in">Log In</h2>
            <form onSubmit={submited}>
                <label> Email address</label>
                <input type="email" placeholder="loveragabriel "
                value={correo}
                onChange={(e) =>setcorreo(e.target.value)}></input>
                <label> Password</label>
                <input type="password" placeholder="**********"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}></input>
                <button onClick={submited}>SUBMIT</button>
            </form>          
            
            <p>Credential Access: <br/>
            loveragabriel / Entrar123 </p>            
        </div>
    )
}


export default HomeAccess;
