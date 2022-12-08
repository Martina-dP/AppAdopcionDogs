import React from "react";
import { Link } from "react-router-dom";

const PreFormAnimals = () => {

  return (
    <div>
      <div>
        <h1>Seleccione que animal quiere compartir</h1>
        <Link to="/newDog">
          <button> Perro </button>
        </Link>
        <Link to="/newCat">
          <button> Gato </button>
        </Link>
      </div>
    </div>
  );
};

export default PreFormAnimals;