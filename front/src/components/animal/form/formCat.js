import React from "react";
import { Link } from "react-router-dom";
import style from "./form.module.css"

const NewCat = () => {

  return (
    <div className={style.all}>
      <h1 className={style.title}>Informacion del gato a publicar</h1>
      <form className={style.form}>
        <label className={style.label} >Nombre : </label>
          <input
            className={style.input}
            type = "text"
            placeholder="Nombre"
            name = "name"
          />
        <label className={style.label} >Imagen : </label>
          <input
            className={style.input}
            type = "text"
            placeholder="Seleccione imagen para subir"
            name = "img"
          />
        <label className={style.label} >Descripcion : </label>
          <input
            className={style.input}
            type = "text"
            placeholder="Describe a la mascotas aqui"
            name = "description"
          />
        <label className={style.label} >Ubicacion : </label>
          <input
            className={style.input}
            type = "text"
            placeholder="Capital Federal, Buenos Aires"
            name = "location"
          />
        <label className={style.label} >Edad : </label>
          <input
            className={style.input}
            type = "text"
            placeholder="Escribe la edad de la mascota aqui"
            name = "age"
          />
        <label className={style.label} >Tamaño : </label>
          <select className={style.input} >
            <option value=""> - </option>
            <option value="Chico"> Chico </option>
            <option value="Mediano"> Mediano </option>
            <option value="Grande"> Grande </option>
          </select>
        <label className={style.label} >Sexo : </label>
          <select className={style.input} >
            <option value=""> - </option>
            <option value="Hembra"> Hembra </option>
            <option value="Macho"> Macho </option>
          </select>
        <input type="submit" value="confirmar"></input>
      </form>
      <Link to="/prePost">
        <p className={style.links} > Volver atras </p>
      </Link>
      <Link to="/home">
        <p className={style.links} > Ir inicio </p>
      </Link>
    </div>
  );
};

export default NewCat;