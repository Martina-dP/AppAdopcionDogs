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
            <p>Olvidaste tu contraseña ? </p>
            <Link to = "/forgotPassword">
                <button> Recuperar contraseña  </button>
            </Link>
            <p>No estas registrado ? </p>
            <Link to = "/singUp">
                <button> Registrate aqui </button>
            </Link>
            <br/>
            <Link to = "/homePage">
                <button> Volver al inicio </button>
            </Link>
        </div>
    )} 

export default Login;