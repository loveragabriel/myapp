import { useState } from "react";
import { Link } from "react-router-dom";

const FormTemp = () =>{
    const [correo, setcorreo] = useState("");
    const [Password, setPassword] = useState('');
    const submited = (e) => {
        e.preventDefault()
        const blog = {correo, Password}
        let letEmail = blog.correo
        /*console.log(letEmail); */
        let letPasswrd = blog.Password
        /*console.log(letPasswrd); */
        if (letEmail=="loveragabriel" && letPasswrd=="Entrar123"){window.open("https://www.linkedin.com/in/loveragabriel/", '_blank')}
        else alert("You're Wrong try Again");
    }
    return(
        <div className="Form-Container">
         <h1>Lavados</h1>
            <h2>Log In</h2>
            <form onSubmit={submited}>
                <label> Email address</label>
                <input type="email" placeholder="loveragabriel "
                value={correo}
                onChange={(e) =>setcorreo(e.target.value)}></input>
                <label> Password</label>
                <input type="password" placeholder="**********"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}></input>
                <button onClick={submited}>SUBMIT</button>
            </form>          
            
            <p>Credential Access: <br/>
            loveragabriel / Entrar123 </p>
            
        </div>
    )
}


export default FormTemp;
