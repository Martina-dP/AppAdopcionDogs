import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

  return (
      <div>
        <div>
          <Link to = "/singUp">
            <button> Registrarse </button>
          </Link>
          <h3>Patitas!</h3>
          <Link to = "/singIn">
            <button> Iniciar sesion </button>
          </Link>
        </div>
        <div>
          <a href="#about">Sobre Nosotros</a>
          <br/>
          <a href="#contact">Contacto</a>
        </div>
      </div>
  );
};
export default Nav;