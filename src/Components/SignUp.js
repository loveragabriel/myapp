import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router";
import styled from "styled-components";
import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightRotate } from '@fortawesome/free-solid-svg-icons'*/

 
//Pages


 
const SignUp= ()=> {
    const [name,setName] = useState("");
    const [email,SetEmail] = useState("");
    const [password,SetPassword] = useState("");
    const [rPassword, SetRPassword] = useState("");
    const navigate =  useNavigate();


    const submitClick =(e)=>{
        e.preventDefault()   
        
        if(name=='' || email==0 || password == 0 && rPassword==0){
            alert("Complete all the files")
        }
         else if (password != rPassword){
             alert('password does not match');
         } else {
            const  myObject = [
                name, email, password, rPassword

            ] ;    
            console.log(myObject);
            {navigate('/')};
    }

}


    return(
        <div>
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