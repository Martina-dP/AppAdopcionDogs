import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postUser } from "../../actions/index"

function SingUp () {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [errors, setError] = useState({});

    const [input, setInput] = useState({
        name: "",
        lastName: "",
        mail: "",
        password: "",
        phone: "",
    })

    function validate(input) {
        const errors = {};
        if (!input.name) {
            errors.name = "Required";
        } 
        if (!input.mail) {
            errors.mail = "Required";
        }
        else if (!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
            input.mail
          )) {
          errors.mail = "Invalid email address";
        }
        if (!input.password) {
            errors.password = "Required";
        }
        else if (`${input.password}`.length < 7){
          errors.password =
            "Password must be larger than 7 characters";
        }
        return errors;
    }
    
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setError(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }
    
    function handleSubmit(e){
        e.preventDefault()
        dispatch(postUser(input))
        setInput({
            name: "",
            lastName: "",
            mail: "",
            password: "",
            phone: "",
        })
    }

    return(
        <div>
            <h4>Te estas registrando en Patitas!</h4>
            <form onSubmit={handleSubmit}>
                <label>Nombre : </label>
                <input
                    type = "text"
                    onChange =  {e => handleChange(e) }
                    placeholder="Nombre"
                    name = "name"
                />
                    {errors.name && (
                        <p> {errors.name} </p>
                    )}
                <label>Apellido : </label>
                <input
                    type = "text"
                    onChange =  {e => handleChange(e) }
                    placeholder="Apellido"
                    name = "lastName"
                />
                <label>Mail : </label>
                <input
                    type = "text"
                    onChange =  {e => handleChange(e) }
                    placeholder="ejemplo@gmail.com"
                    name = "mail"
                />
                {errors.mail && (
                    <p> {errors.mail} </p>
                )}
                <label>Phone : </label>
                <input
                    type = "text"
                    onChange =  {e => handleChange(e) }
                    placeholder="+54 1173951186"
                    name = "phone"
                />
                <label>Contraseña : </label>
                <input
                    type = "text"
                    onChange =  {e => handleChange(e) }
                    placeholder="*******"
                    name = "password"
                />
                {errors.password && (
                    <p> {errors.password} </p>
                )}
                <div>
                    <button type = "submit"> Crear cuenta </button>
                </div>
            </form>
            <label>Ya estas registrado ? </label>
            <Link to = "/login">
                <button> Iniciar sesion </button>
            </Link>
            <br/>
            <Link to = "/homePage">
                <button> Volver al inicio </button>
            </Link>
        </div>
    )} 

export default SingUp;