import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router";


//Pages
import NavComponent from "./NavComponent";
import About from "./AboutUs";

const HomeAccess = () =>{
   const [email, setEmail] = useState("");
    const [password, setpassword] = useState('');
    const navigate =  useNavigate();
    const submited = (e) => {
            // Here check if the credentials are correct for access 
        e.preventDefault()
        const log = {email, password}
        let email_ = log.email;
        let passwrd_ = log.password;
        if (email_=="loveragabriel" &&  passwrd_=="Entrar123"){navigate('/Home')}    
        else if (email_=="loveragabriel" &&  passwrd_ !="Entrar123") {            
            alert("the password is wrong");
        }
        else if (email_!="loveragabriel" &&  passwrd_ ==="Entrar123") {
            alert("check the email entered")
        }
        else
         alert("You're Wrong try Again");  
    }
    const signUp = (e)=>{
        e.preventDefault()
        if (signUp){navigate('/SignUp')}
    }
   
    return( 
        <div>
            <h1></h1>
            <h2 className="log-in">Log In</h2>
            <form onSubmit={submited}>
                <label> Email address</label>
                <input type="email" placeholder="loveragabriel"
                value={email}
                onChange={(e) =>setEmail(e.target.value)}></input>
                <label> Password</label>
                <input type="password" placeholder="**********"
                value={password}
                onChange={(e) => setpassword(e.target.value)}></input>
                <button onClick={submited}>SUBMIT</button>
            </form>          
            <p>Credential Access: <br/>
            loveragabriel / Entrar123 </p> 
            <hr></hr>
            <h2 className="sign-up"> Don't have an account? </h2>
            <button onClick={signUp}>Create Account</button>

        </div>
    )
}


export default HomeAccess;
