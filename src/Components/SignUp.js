import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router";


//Pages


const SignUp = () =>{
    const navigate =  useNavigate();
    const [name,setName] = useState('');
    const signIn = (e)=>{
        e.preventDefault()
         const _name = name;
        if (signIn){navigate ('/UserCreated')}
    }
    return( 
        <div >
            <h1>   </h1>
            <h2 >Sign Up</h2>
            <form action="" className="sign-up-form">
                <label> Name </label>
                    <input type="text" placeholder="Gabriel Lovera" value={name} onChange={(e) => console.log(e.target.setName())}/> />
                
                <label> Email </label>
                    <input type="email" placeholder="loveragabriel20@gmail.com"/>
                
                <label> Password </label>
                    <input type="password" placeholder="********"/>
                    
                <label> Repeat the Password </label>
                    <input type="password" placeholder="********"/>
                
                <button onClick={signIn}>Create</button>
            </form>

        </div>
    )
    }
   



export default SignUp;