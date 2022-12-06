import React from "react";
import { Link } from "react-router-dom";
import style from "./nav.module.css"

const Nav = () => {

  return (
      <div className={style.all}>
        <div className={style.title}>
          <h3>Patitas!</h3>
        </div>
        <div className={style.links}>
          <div className={style.info}>
            <a href="#about">Sobre Nosotros</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contacto</a>
          </div>
          <div className={style.btns}>
            <Link to = "/singIn">
              <button> Iniciar sesion </button>
            </Link>
            <Link to = "/singUp">
              <button> Registrarse </button>
            </Link>
          </div>
        </div>
      </div>
  );
};
export default Nav;