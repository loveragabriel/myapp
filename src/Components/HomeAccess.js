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
        const hereTheUser = JSON.parse(localStorage.getItem("newUser"));
        const emailStored = hereTheUser[1]
        const passStored = hereTheUser[2];
        const correctEmail = email === emailStored;
        const correctPass = password === passStored;

        if(correctEmail== false && correctPass){
            alert("Wrong Email");
        } else if (correctEmail && correctPass ==false){
            alert("Wrong Password") 
        } else if (correctEmail === emailStored && correctPass === passStored) {
            navigate('/Home')
        }
        else if (email ===''|| password ==='') {
            alert("Please complete the fields")            
        } 
        else alert("There is not a user- please Sign up!")       
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
                <input type="email" placeholder="loveragabriel" required
                value={email}
                onChange={(e) =>setEmail(e.target.value)}></input>
                <label> Password</label>
                <input type="password" placeholder="**********" required
                value={password}
                onChange={(e) => setpassword(e.target.value)}></input>
                <button onClick={submited}>SUBMIT</button>
            </form>          
            <hr></hr>
              
            <hr></hr>
            <h2 className="sign-up"> Don't have an account? </h2>
            <button onClick={signUp}>Create Account</button>

        </div>
    )
}

export default HomeAccess;
