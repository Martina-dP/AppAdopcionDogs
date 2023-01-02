import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../actions/index";
import style from "./login.module.css"

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [errors, setError] = useState({});

    const [input, setInput] = useState({
        mail: "",
        password: ""
    })
    
    function validate(input) {
        const errors = {};
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
        dispatch(login(input));
        setInput({
            mail: "",
            password: ""
        })
        navigate("/home")
    }

    return(
        <div className={style.all}>
            <h4 className={style.titel}> Inicio de sesión </h4>
            <form className={style.form} onSubmit={handleSubmit}>
                <label className={style.label} >Mail : </label>
                <input
                    className={style.input}
                    type = "text"
                    onChange =  {e => handleChange(e) }
                    placeholder="ejemplo@gmail.com"
                    name = "mail"
                    value={input.mail}
                />
                    {errors.mail && (
                        <p> {errors.mail} </p>
                    )}
                <label className={style.label} >Contraseña : </label>
                <input
                    className={style.input}
                    type = "text"
                    onChange =  {e => handleChange(e) }
                    placeholder="*******"
                    name = "password"
                    value={input.password}
                />
                    {errors.password && (
                        <p> {errors.password} </p>
                    )}
                <div>
                    <button type = "submit"> Entrar </button>
                </div>
            </form>
            <label className={style.links}> 
                Olvidaste tu contraseña ? 
                <Link to = "/forgotPassword">
                    <p> Recuperar contraseña  </p>
                </Link>
            </label>
            <label className={style.links}>
                No tenes cuenta ? 
                <Link to = "/singUp">
                    <p> Registrate aqui </p>
                </Link>
            </label>
                <Link to = "/">
                    <p className={style.links}> Volver al inicio </p>
                </Link>
        </div>
    )} 

export default Login;