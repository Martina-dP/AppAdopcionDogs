import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../actions/index";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { BiShowAlt } from 'react-icons/bi';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import style from "./login.module.css"

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPass, setShowPass] = useState(false)
    
    const initialValues = ({
        mail: "",
        password: "",
    })

    const validationSchema = Yup.object().shape({
        mail: Yup.string().email("El correo no es válido").required("El correo es obligatorio"),
        password: Yup.string()
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .max(100, "La contraseña no puede tener más de 100 caracteres")
        .required("La contraseña es obligatoria")
        .matches(/r'\s'/, 'Contiene espacio en blanco'),
      });

    function handleSubmit(e){
        console.log(e)
        dispatch(login(e));
    }

    return(
        <div className={style.contenedor}>
        <div className={style.all}>
            <h4 className={style.title}> Inicio de sesión </h4>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {(formik) => {
                    const { values, handleChange, errors, touched, handleSubmit } = formik;
                    return (
                        <Form onSubmit={handleSubmit}>
                            <div className={style.form}>
                                <div className={style.contenedorINPUTS}>
                                    <div className={style.inputs}>
                                        <label> Mail : </label>
                                        <input
                                            type = "text"
                                            placeholder="ejemplo@gmail.com"
                                            name = "mail"
                                            value={values.mail}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className={style.inputs}>
                                        <label> Contraseña : </label>
                                        <input
                                            type = {showPass ? "text" : "password" }
                                            placeholder="*******"
                                            name = "password"
                                            value={values.password}
                                            onChange={handleChange}
                                        />
                                        <div onClick={() => setShowPass(!showPass)}>
                                            {showPass ? <AiOutlineEyeInvisible /> : <BiShowAlt  /> }
                                        </div>
                                    </div>
                                </div>
                                <div className={style.contenedorBTN}>
                                    <button className={style.enterBTN} type = "submit"> Entrar </button>
                                </div>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
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
                <p className={style.back}> Volver al inicio </p>
            </Link>
        </div>
        </div>
    )} 

export default Login;