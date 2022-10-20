import React from "react";
import { Link } from "react-router-dom";

function SingUp () {

    return(
        <div>
            <h4>Te estas registrando en Patitas!</h4>
            <form>
                <label>Nombre : </label>
                <input
                    type = "text"
                    placeholder="Nombre"
                    name = "name"
                />
                <label>Apellido : </label>
                <input
                    type = "text"
                    placeholder="Apellido"
                    name = "lastName"
                />
                <label>Mail : </label>
                <input
                    type = "text"
                    placeholder="ejemplo@gmail.com"
                    name = "mail"
                />
                <label>Phone : </label>
                <input
                    type = "text"
                    placeholder="+54 1173951186"
                    name = "phone"
                />
                <label>Contraseña : </label>
                <input
                    type = "text"
                    placeholder="*******"
                    name = "password"
                />
                <label>Confirmar contraseña : </label>
                <input
                    type = "text"
                    placeholder="*******"
                    name = "password"
                />
            </form>
            <label>Ya estas registrado ? </label>
            <Link to = "/singIn">
                <button> Iniciar sesion </button>
            </Link>
            <br/>
            <Link to = "/homePage">
                <button> Volver al inicio </button>
            </Link>
        </div>
    )} 

export default SingUp;