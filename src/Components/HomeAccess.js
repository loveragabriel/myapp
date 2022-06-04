import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

import { Navigate, useNavigate } from "react-router";


//Pages




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
        } else if (email === emailStored && password === passStored) {
            {navigate('/Home')}
        }
        else if (email ===''|| password ==='') {
            alert("Please complete the fields")            
        } 
        else alert("Your Credential does not match with any user")     ;;
    }
    const signUp = (e)=>{
        e.preventDefault()
        if (signUp){navigate('/SignUp')}
    }
       
    return( 
        <div>
            <h1 className="log-in">Welcome!</h1>
            <form onSubmit={submited}>
                <label> Email Address</label>
                <input type="email" placeholder="loveragabriel20@gmail.com" required
                value={email}
                onChange={(e) =>setEmail(e.target.value)}></input>
                <label> Password</label>
                <input type="password" placeholder="**********" required
                value={password}
                onChange={(e) => setpassword(e.target.value)}></input>
                <button onClick={submited}>Submit</button>
            </form>                      
            <hr></hr>
            <h2 className="sign-up"> Don't have an account? </h2>
            <button onClick={signUp}>Create Account</button>

        </div>
    )
}


export default HomeAccess;

