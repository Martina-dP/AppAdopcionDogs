import React from "react";
import { Link } from "react-router-dom";

const NewPassword = () => {

  return (
    <div>
      <div>
        <h1>Cambiar contraseña</h1>
        <form>
          <div>
            <label>Nueva contraseña : </label>
            <input
              name="password1"
              type="password"
              required
            />
          </div>
          <div>
            <label>Confirmar nueva contraseña : </label>
            <input
              name="password2"
              type="password"
              required
            />
          </div>
           <input type="submit" value="confirmar"></input>
        </form>
        <Link to="/homePage">
            <p> Ir al inicio </p>
        </Link>
      </div>
    </div>
  );
};

export default NewPassword;