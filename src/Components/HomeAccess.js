import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router";
import NavComponent from "./NavComponent";
import About from "./AboutUs";

//Pages



const HomeAccess = () =>{
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState('');
    const navigate =  useNavigate();
    const submited = (e) => {

        e.preventDefault()
        const blog = {email, Password}
        let email_ = blog.email
        /*console.log(letEmail); */
        let passwrd_ = blog.Password
        /*console.log(letPasswrd); */

        if (email_=="loveragabriel" &&  passwrd_=="Entrar123"){navigate('/Home')}
        else alert("You're Wrong try Again");  
    }
   
    return( 
        <div>
         <h1>my-react-page</h1>
            <h2 className="log-in">Log In</h2>
            <form onSubmit={submited}>
                <label> Email address</label>
                <input type="email" placeholder="loveragabriel "
                value={email}
                onChange={(e) =>setEmail(e.target.value)}></input>
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
