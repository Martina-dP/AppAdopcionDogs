import React from "react";
import { Link } from "react-router-dom";

const RecoverPassword = () => {

  return (
    <div>
      <div>
        <form>
            <label>Mail : </label>
            <input
                type = "text"
                placeholder="ejemplo@gmail.com"
                name = "mail"
            />
          <input type="submit" value="enviar"></input>
          <div >
            <Link to="/login">
              <p > Volver a iniciar sesion</p>
            </Link>
            <Link to="/">
              <p> Ir al inicio </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecoverPassword;