import React from "react";
import { Link } from "react-router-dom";

import style from "./form.module.css"

const NewDog = () => {

  return (
    <div className={style.all}>
      <h1 className={style.title}>Informacion del perro a publicar</h1>
      <div className={style.almostAll}>
        <form className={style.form}>
          <div className={style.info}>
            <label>Nombre : </label>
              <input
                type = "text"
                placeholder="Nombre"
                name = "name"
              />
            <label>Imagen : </label>

            <label>Descripcion : </label>
              <input
                type = "text"
                placeholder="Describe a la mascotas aqui"
                name = "description"
              />
            <label>Ubicacion : </label>
              <input
                type = "text"
                placeholder="Capital Federal, Buenos Aires"
                name = "location"
              />
            <label>Edad : </label>
              <input
                type = "text"
                placeholder="Escribe la edad de la mascota aqui"
                name = "age"
              />
            <label>Tamaño : </label>
              <select>
                <option value=""> - </option>
                <option value="Chico"> Chico </option>
                <option value="Mediano"> Mediano </option>
                <option value="Grande"> Grande </option>
              </select>
            <label>Sexo : </label>
              <select>
                <option value=""> - </option>
                <option value="Hembra"> Hembra </option>
                <option value="Macho"> Macho </option>
              </select>
          </div>
          <input type="submit" value="confirmar"></input>
          <Link to="/prePost">
            <p>Volver atras </p>
          </Link>
          <Link to="/home">
            <p>Ir inicio </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default NewDog;