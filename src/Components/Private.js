import React, { Component } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useState } from 'react';

const   Private = () => {
  const Auth = false;
  return Auth ? <Outlet/> : <Navigate to ="/" />
}

    


export default Private;
