import React from "react";
import { Link } from "react-router-dom";
import style from "./nav.module.css"

const Nav = () => {

  return (
      <div className={style.all}>
        <div className={style.subAll}>
          <p className={style.title}>Patitas!</p>
          <div className={style.links}>
            <a href="#about">Sobre Nosotros</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contacto</a>
          </div>
          <div className={style.btns}>
            <Link to = "/login">
              <button className={style.btnsText}> Iniciar sesion </button>
            </Link>
            <Link to = "/singUp">
              <button className={style.btnsText}> Registrarse </button>
            </Link>
          </div>
        </div>
      </div>
  );
};
export default Nav;