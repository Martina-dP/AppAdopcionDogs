import React from "react";
import { Link } from "react-router-dom";

const DetailsUser = () => {

  return (
    <div >
      <h1>Mi perfil</h1>
      <Link to="/home">
        <p>Ir al inicio </p>
      </Link>
    </div>
  );
};
export default DetailsUser;
