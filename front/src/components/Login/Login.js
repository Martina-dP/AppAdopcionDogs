import React from "react";
import { Link } from "react-router-dom";

function Login () {

    return(
        <div>
            <h4>HOLA</h4>
            <form>
                <label>Mail : </label>
                <input
                    type = "text"
                    placeholder="ejemplo@gmail.com"
                    name = "mail"
                />
                <label>Contraseña : </label>
                <input
                    type = "text"
                    placeholder="*******"
                    name = "password"
                />
            </form>
            <label>Olvidaste tu contraseña ? </label>
            <Link to = "/forgotPassword">
                <p> Recuperar contraseña  </p>
            </Link>
            <label>No tenes cuenta ? </label>
            <Link to = "/singUp">
                <p> Registrate aqui </p>
            </Link>
            <br/>
            <Link to = "/homePage">
                <p> Volver al inicio </p>
            </Link>
        </div>
    )} 

export default Login;