import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { Outlet } from "react-router";
import { Navigate, useNavigate } from "react-router";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


//Pages
import { Circle } from "./Clicle";

const Home = () =>{
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
        } else if (email === emailStored && password === passStored) {
            {navigate('/Home')}
        }
        else if (email ===''|| password ==='') {
            alert("Please complete the fields")            
        } 
        else alert("Your Credential does not match with any user");
    }
    const signUp = (e)=>{
        e.preventDefault()
        if (signUp){navigate('/SignUp')}
    }
    const ForgotPassword = (e)=>{
        e.preventDefault()
        if (ForgotPassword){navigate('/ForgotPassword')}
    }
    return( 
        <div id="Home">
           <Circle/>
            <h1 className="log-in-title">Welcome</h1>
            <p className="Sign-In">Sign In</p>
            <form onSubmit={submited}>
                <label> Email</label>
                <input type="email" placeholder="loveragabriel20@gmail.com" required
                value={email}
                onChange={(e) =>setEmail(e.target.value)}></input>
                <label> Password</label>
                <input type="password" placeholder="**********" required
                value={password}
                onChange={(e) => setpassword(e.target.value)}></input>
                <button onClick={submited}>Sign In</button>
            </form> 
            <div className="Home-bottom-links">
                <h2 className="Forgot-password" onClick={ForgotPassword}>Forgot Password</h2>
                <h2 className="sign-up" onClick={signUp}> SignUp </h2>
            </div>
             {/*<button onClick={signUp}>Create Account</button>*/}

        </div>
    )
}
export default Home;

