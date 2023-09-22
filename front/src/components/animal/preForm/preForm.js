import React from "react";
import { Link } from "react-router-dom";
import NavBase from "../../nav/nav";
import style from "./preForm.module.css"

const PreFormAnimals = () => {

  return (
    <div>
      <NavBase/>
      <div className={style.all} >
        <h1 className={style.title} > Seleccione que animal quiere compartir </h1>
        <div className={style.links}>
          <Link to="/newDog">
            <button className={style.button} > Perro </button>
          </Link>
          <Link to="/newCat">
            <button className={style.button} > Gato </button>
          </Link>
        </div>
        <Link to="/home">
          <p className={style.btn} > Ir inicio </p>
        </Link>
      </div>
    </div>
  );
};

export default PreFormAnimals;