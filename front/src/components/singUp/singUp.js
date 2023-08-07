import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getUser} from "../../actions/index"
import { postUser } from "../../actions/index"
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { BiShowAlt } from 'react-icons/bi';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import style from "./singUp.module.css"

function SingUp () {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPass, setShowPass] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    useEffect(() =>{ 
      dispatch(getUser());
    },[dispatch])



    const initialValues = ({
        name: "",
        lastName: "",
        mail: "",
        password: "",
        phone: "",
    })

        
  const animalsFalse = useSelector(state => state.allUsers) 
  
  console.log(animalsFalse)

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("El nombre es requerido"),
        lastName: Yup.string().required("El nombre es requerido"),
        mail: Yup.string()
        .email("El correo no es válido")
        .required("El correo es obligatorio"),
        password: Yup.string()
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .max(100, "La contraseña no puede tener más de 100 caracteres")
        .required("La contraseña es obligatoria")
        .matches(/[0-9]/, 'Debe contener al menos un numero')
        .matches(/[A-Z]/, 'Debe contener al menos una mayuscula'),
        phone: Yup.string().required("El teléfono es obligatorio"),
      });

    function handleSubmit(e){
        console.log(e)
        dispatch(postUser(e))
    }

    return(
        <div className={style.contenedor} >
        <div className={style.all} >
        <h4 className={style.title}> Creando cuenta </h4>
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(formik) => {
              const { values, handleChange, errors, touched, handleSubmit } = formik;
              return (
                <Form className={style.form} onSubmit={handleSubmit}>
                    <div className={style.form}>
                        <div className={style.inputs}>
                            <label> Nombre : </label>
                            <input
                                type = "text"
                                placeholder="Nombre"
                                name = "name"
                                value={values.name}
                                onChange={handleChange}
                                className={errors.name && touched.name ? "input-error" : ""}
                            />
                            {errors.name && touched.name && <p className="error">{errors.name}</p>}
                        </div>
                        <div className={style.inputs}>
                            <label> Apellido : </label>
                            <input
                                type = "text"
                                placeholder="Apellido"
                                name = "lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                className={errors.lastName && touched.lastName ? "input-error" : ""}
                            />
                            {errors.lastName && touched.lastName && <p className="error">{errors.lastName}</p>}
                        </div>
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
                            {errorMsg ? <p className="error">{errorMsg}</p> : ""}
                        </div>
                        <div className={style.inputs}>
                            <label> Phone : </label>
                            <input
                                type = "text"
                                placeholder="+54 1173951186"
                                name = "phone"
                                value={values.phone}
                                onChange={handleChange}
                                className={errors.phone && touched.phone ? "input-error" : ""}
                            />
                            {errors.phone && touched.phone && <p className="error">{errors.phone}</p>}
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
                        <div className={style.contenedorBTN}>
                            <button className={style.enterBTN} type = "submit"> Crear cuenta </button>
                        </div>
                    </div>
                </Form>
              );
            }}
          </Formik>
            <label className={style.links}> Ya estas registrado ? 
                <Link to = "/login">
                    <p> Iniciar sesion </p>
                </Link>
            </label>
            <br/>
            <Link to = "/">
                <p className={style.back}> Volver al inicio </p>
            </Link>
        </div>
        </div>
    )} 

export default SingUp;