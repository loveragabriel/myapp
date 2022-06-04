import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router";
import styled from "styled-components";
import NavNoLogIn from "./NavNoLogIn";
import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";


 
//Pages


 
const SignUp= ()=> {
    const [name,setName] = useState("");
    const [email,SetEmail] = useState("");
    const [password,SetPassword] = useState("");
    const [rPassword, SetRPassword] = useState("");
    const [ifLognUp, setIfLogUp] = useState('false');
    const navigate =  useNavigate();


    const submitClick =(e)=>{
        e.preventDefault()   
        const myObject=[]
        if(name=='' || email==0 || password == 0 && rPassword==0){
            alert("Complete all the fields")
        }
         else if (password != rPassword){
             alert('password does not match');
         } else {
            myObject.push(name, email, password, rPassword)
            const newUser = JSON.stringify(myObject);
            localStorage.setItem('newUser',newUser);
            alert("Welcome " + name )
            {navigate('/')};
    }
}
    return(
        <div>
        <NavNoLogIn/>
            <h1>Hello This practice</h1>
            <form onSubmit={submitClick}>
            <div>
                <label>Name </label>
                <input type="text" placeholder="Gabriel Lovera" name="name" onChange={e => setName(e.target.value)} value={name}/>
            </div>
            <div>
                <label>Email </label>
                <input type="email" placeholder="loveragabriel20@gmail.com" name="email" onChange={e => SetEmail(e.target.value)} value={email}/>
            </div>
            <div>
                <label>Password </label>
                <input type="Password" placeholder="*************" name="password" onChange={e => SetPassword(e.target.value)} value={password}/>
            </div>
            <div>
                <label>Repeat Password </label>
                <input type="Password" placeholder="*************" name="rPassword" onChange={e => SetRPassword(e.target.value)} value={rPassword}
                    
                />
            </div>
                <button type="Submit">Send</button>
            </form>
        </div>
        
    )
}

export default SignUp;