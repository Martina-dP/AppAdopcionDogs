import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postUser } from "../../actions/index"
import style from "./singUp.module.css"

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
        if (!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
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
    
const msgError = "Hubo un error"

    function handleSubmit(e){
        e.preventDefault()
        if (Object.values(errors).length > 1)
      return msgError
    else {
        dispatch(postUser(input))
       
        setInput({
            name: "",
            lastName: "",
            mail: "",
            password: "",
            phone: "",
        })
        navigate("/login")
    }
}

    return(
        <div className={style.all} >
            <h4 className={style.title} >Te estas registrando en Patitas!</h4>
            <form className={style.form} onSubmit={handleSubmit}>
                <label className={style.label} >Nombre : </label>
                <input
                    className={style.input}
                    type = "text"
                    onChange =  {e => handleChange(e) }
                    placeholder="Nombre"
                    name = "name"
                />
                    {errors.name && (
                        <p> {errors.name} </p>
                    )}
                <label className={style.label} >Apellido : </label>
                <input
                    className={style.input}
                    type = "text"
                    onChange =  {e => handleChange(e) }
                    placeholder="Apellido"
                    name = "lastName"
                />
                <label className={style.label} >Mail : </label>
                <input
                    className={style.input}
                    type = "text"
                    onChange =  {e => handleChange(e) }
                    placeholder="ejemplo@gmail.com"
                    name = "mail"
                />
                    {errors.mail && (
                    <p> {errors.mail} </p>
                )}
                <label className={style.label} >Phone : </label>
                <input
                    className={style.input}
                    type = "text"
                    onChange =  {e => handleChange(e) }
                    placeholder="+54 1173951186"
                    name = "phone"
                />
                <label className={style.label} >Contraseña : </label>
                <input
                    className={style.input}
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
            <label className={style.links} > Ya estas registrado ? 
                <Link to = "/login">
                    <p> Iniciar sesion </p>
                </Link>
            </label>
            <br/>
            <Link to = "/">
                <p className={style.links} > Volver al inicio </p>
            </Link>
        </div>
    )} 

export default SingUp;