import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { Outlet } from "react-router";
import { Navigate, useNavigate } from "react-router";
import { Circle } from "./Circle";

export const ForgotPassword = () => {
   /* const recovery = (e) => {
        // Here check if the credentials are correct for access 
    e.preventDefault()
     const mailRecovery = mailto:{recoveryEmail}subject=Forgot%20you%20Email&body=Message%20for%20recovering%20Email.%20} value={recoveryEmail}
*/    const navigate =  useNavigate();
    
const back = (e)=>{
    e.preventDefault()
    if (back){navigate('/')}
    

 }
 

  return (
    <div className='forgot-password'>
          <h2 className="back" onClick={back}> Back </h2>
          <Circle/>
          <div className="recovery">
            <label>Email</label>
                <input type="email" placeholder="recovery@email.com" name="recoveryEmail" />
          </div>
    </div>
  )
}
