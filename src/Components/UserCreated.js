import React from "react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router";

//Pages
import NavComponent from "./NavComponent";



const UserCreated =()=>{
    const navigate =  useNavigate();
    const signIn = (e)=>{
        e.preventDefault()
        if (signIn){navigate ('/')}
    }
    return(
        <div>
        
            <h1>
                User Created Successfully
            </h1>
            <Link onClick={signIn} to="/">
                                Sign In
                            </Link>
        </div>
    )
}
export default UserCreated;