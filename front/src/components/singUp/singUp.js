import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postUser } from "../../actions/index"
import { Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./singUp.module.css"

function SingUp () {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialValues = ({
        name: "",
        lastName: "",
        mail: "",
        password: "",
        phone: "",
    })

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("El nombre es requerido"),
        lastName: Yup.string().required("El nombre es requerido"),
        mail: Yup.string().email("El correo no es válido").required("El correo es obligatorio"),
        password: Yup.string()
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .max(100, "La contraseña no puede tener más de 100 caracteres")
        .required("La contraseña es obligatoria"),
        phone: Yup.string().required("El teléfono es obligatorio"),
      });

    function handleSubmit(e){
        e.preventDefault()
        dispatch(postUser(e))
       
        navigate("/login")
    }

    return(
        <div className={style.all} >
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(formik) => {
              const { values, handleChange, errors, touched } = formik;
              return (
                <Form className={style.form} onSubmit={handleSubmit}>
                  <div>
                    <label className={style.label} >Nombre : </label>
                    <input
                        className={style.input}
                        type = "text"
                        placeholder="Nombre"
                        name = "name"
                        value={values.name}
                        onChange={handleChange}
                        error={Boolean(errors.name) && touched.name}
                        errorMsg={errors.name}
                    />
                    <label className={style.label} >Apellido : </label>
                <input
                    className={style.input}
                    type = "text"
                    placeholder="Apellido"
                    name = "lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    error={Boolean(errors.name) && touched.name}
                    errorMsg={errors.name}
                />
                <label className={style.label} >Mail : </label>
                <input
                    className={style.input}
                    type = "text"
                    placeholder="ejemplo@gmail.com"
                    name = "mail"
                    value={values.mail}
                    onChange={handleChange}
                    error={Boolean(errors.name) && touched.name}
                    errorMsg={errors.name}
                />
                <label className={style.label} >Phone : </label>
                <input
                    className={style.input}
                    type = "text"
                    placeholder="+54 1173951186"
                    name = "phone"
                    value={values.phone}
                    onChange={handleChange}
                    error={Boolean(errors.name) && touched.name}
                    errorMsg={errors.name}
                />
                <label className={style.label} >Contraseña : </label>
                <input
                    className={style.input}
                    type = "text"
                    placeholder="*******"
                    name = "password"
                    value={values.password}
                    onChange={handleChange}
                    error={Boolean(errors.name) && touched.name}
                    errorMsg={errors.name}
                />
                    <div>
                        <button type = "submit"> Crear cuenta </button>
                    </div>
                    </div>
                </Form>
              );
            }}
          </Formik>
            {/* <h4 className={style.title} >Te estas registrando en Patitas!</h4>
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
            </form> */}
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