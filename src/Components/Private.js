import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useState } from 'react';

const   Private = () => {
  const hereTheUser = JSON.parse(localStorage.getItem("newUser"));
  const emailStored = hereTheUser[1]
  const passStored = hereTheUser[2];

  return console.log(); 

}

    


export default Private;
