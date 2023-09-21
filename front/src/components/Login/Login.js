import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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

    const userLogin = useSelector((state) => state.user);
    console.log("USER", userLogin)
    
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
      });

    const handleSubmit = (values) => {
        dispatch(login(values)).then((response) => {
           console.log(response.payload.msg, "response")    
           navigate("/home");      
        })
          .catch((error) => {
            alert(error.response.data.msg, "error")    
          });
        console.log(values)
    };

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
                    const { values, handleChange, errors, touched } = formik;
                    return (
                        <Form>
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
                                            className={errors.mail && touched.mail ? "input-error" : ""}
                                        />
                                        {errors.mail && touched.mail && <p className="error">{errors.mail}</p>}
                                    </div>
                                    <div className={style.inputs}>
                                        <label> Contraseña : </label>
                                        <input
                                            type = {showPass ? "text" : "password" }
                                            placeholder="*******"
                                            name = "password"
                                            value={values.password}
                                            onChange={handleChange}
                                            className={errors.password && touched.password ? "input-error" : ""}
                                        />
                                        {errors.password && touched.password && <p className="error">{errors.password}</p>}
                                        <div onClick={() => setShowPass(!showPass)}>
                                            {showPass ? <AiOutlineEyeInvisible /> : <BiShowAlt  /> }
                                        </div>
                                    </div>
                                </div>
                                <div className={style.contenedorBTN}>
                                    <button className={style.enterBTN} type="submit"> Entrar </button>
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