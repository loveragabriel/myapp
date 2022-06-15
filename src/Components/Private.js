import React, { Component } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const   Private = () => {
  const Auth = true;
  return Auth ? <Outlet/> : <Navigate to ="/" />
}

export default Private;
