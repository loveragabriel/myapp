import React from "react";
/*import ReactDOM from "react-dom/client";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router";*/
import styled from "styled-components";

 
//Pages


const Label = styled.h1`
 background-color: blue; 
`
; 
const SignUp= ()=> {
    return(
        <div>
            <h1>Hello This practice</h1>
            <form>
                <Label>Name </Label>
                <input type="text" placeholder="Gabriel Lovera"/>
            </form>
        </div>
        
    )
}
    

   



export default SignUp;

/*const SignUp = () =>{
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
    }*/