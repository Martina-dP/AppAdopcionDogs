import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postAnimal } from "../../../actions/index"
import NavBase from "../../nav/nav";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./form.module.css"

const NewDog = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = ({
    name: "",
    description: "",
    location: "",
    age: "",
    size: "",
    sex: "",
  })

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es requerido"),
    description: Yup.string()
      .required("Se requiere una descripcion")
      .min(10, "Minimo 10 caracteres"),
    location: Yup.string().required("La ubicacion es requerida"),
    age: Yup.number().required("La edad es requerida"),
  });

  function handleSubmit(e){
    dispatch(postAnimal(e)).then((response) => {
      console.log(response, "response")    
      navigate("/home");      
    })
    .catch((error) => {
      alert( "error", error)    
    });
    console.log(e)
  }

  return (
    <div>
      <NavBase/>
      <div className={style.all}>
        <h1 className={style.title}>Informacion del perro a publicar</h1>
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
                  <div>
                    <div>
                      <label>Nombre : </label>
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
                    <div>
                      <label>Imagen : </label>
                        <input
                          type = "file"
                          placeholder="Nombre"
                          name = "img"
                      />
                    </div>
                    <div>
                      <label>Descripcion : </label>
                        <input
                          type = "text"
                          placeholder="Breve descripcion"
                          name = "description"
                          value={values.description}
                          onChange={handleChange}
                          className={errors.description && touched.description ? "input-error" : ""}
                      />
                      {errors.description && touched.description && <p className="error">{errors.description}</p>}
                    </div>
                    <div>
                      <label>Ubicacion : </label>
                        <input
                          type = "text"
                          placeholder="Ubicacion"
                          name = "location"
                          value={values.location}
                          onChange={handleChange}
                          className={errors.location && touched.location ? "input-error" : ""}
                      />
                      {errors.location && touched.location && <p className="error">{errors.location}</p>}
                    </div>
                    <div>
                      <label>Edad : </label>
                        <input
                          type = "text"
                          placeholder="Edad"
                          name = "age"
                          value={values.age}
                          onChange={handleChange}
                          className={errors.age && touched.age ? "input-error" : ""}
                      />
                      {errors.age && touched.age && <p className="error">{errors.age}</p>}
                    </div>
                    <label className={style.label} >Tamaño : </label>
                      <select className={style.input} name="size" value={values.size} onChange = {handleChange} >
                        <option value=""> - </option>
                        <option value="Chico"> Chico </option>
                        <option value="Mediano"> Mediano </option>
                        <option value="Grande"> Grande </option>
                      </select>
                    <label className={style.label} >Sexo : </label>
                      <select className={style.input} name="sex" value={values.sex} onChange = {handleChange}  >
                        <option value=""> - </option>
                        <option value="Hembra"> Hembra </option>
                        <option value="Macho"> Macho </option>
                      </select>
                    <div>
                      <button type = "submit"> Confirmar </button>
                    </div>
                  </div>
                </Form>
              );
            }}                                                                                               
          </Formik>
        <Link to="/prePost">
          <p className={style.links} > Volver atras </p>
        </Link>
        <Link to="/home">
          <p className={style.links} > Ir inicio </p>
        </Link>
      </div>
    </div>
  );
};

export default NewDog;