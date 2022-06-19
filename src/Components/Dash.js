import React from 'react'
import { Navigate, useNavigate } from "react-router";


 const Dash = () => {
    const navigate =  useNavigate();
    const back = (e)=>{
        e.preventDefault()
        if (back){navigate('/')}
     }
  return (
    <div className='Dash'>
        <div className='NAV-BAR'>
        <h2 className="back" onClick={back}> Back </h2>
        <div className='div-log'><span class="dot"></span></div>
        </div>
        <section className='Home-panel'>
            Home Panel!
        </section>
    </div>
  )
}

export default Dash; 